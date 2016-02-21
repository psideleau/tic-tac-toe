(ns tic.ui.handler-spec
  (:require [speclj.core :refer :all]
            [ring.util.codec :as codec]
            [ring.mock.request :refer :all]
            [clojure.data.json :as json]
            [tic.ui.handler :refer :all]
            [tic.game-controller :as game-controller]))

(deftype SpyGameListener []
  game-controller/GameListener
  (update-board! [this game] )
  (winner [this game] )
  (tied [this game] ))

(defn get-request [url]
  (app (request :get url)))

(defn should-draw-tic-tac-toe-board [body]
  (should= 3 (count (re-seq #"class=\"row\"" body)))
  (should= 9 (count (re-seq #"class=\"square\"" body))))

(describe "starting a game of tic-tac-toe"
  (it "GET '/' should say tic tac toe"
      (let [response (get-request "/")
            body (:body response)]
        (should-draw-tic-tac-toe-board body)
        (should= 200 (:status response))))

  (it "POST '/tic-tac-toe' should start a new game"
      (let [expected-game (game-controller/start { :player :X :player-first true})
            response (app (request :post "/tic-tac-toe"))]
            (should= 200 (:status response))
            (should= (json/write-str expected-game) (:body response)))))

(defn take-the-third-square [request-body]
  (-> (request :post "/squares/2"
               (json/write-str request-body))
      (content-type "application/json")))

(defn expected-game-result-after-taking-the-third-square [game]
  (json/write-str (game-controller/take-square game 2 (SpyGameListener.))))

(defn json-response-body [response]
  (json/read-str (:body response) :key-fn keyword))

(defn assert-response-ok [response]
  (should= 200 (:status response)))

(defn assert-correct-game [game response]
  (let [expected-game-json (expected-game-result-after-taking-the-third-square game)]
   (should= (json/read-str expected-game-json :key-fn keyword) (:game (json-response-body response)))))

(defn request-body [game state-callback-methods]
  {:game game :callback-methods state-callback-methods})

(defn execute-test [game state-callback-methods]
  (-> (request-body game state-callback-methods)
      (take-the-third-square)
      (app)))

(defn assert-callback-method-is [method response]
  (should= method (:callback-method (json-response-body response))))

(describe "playing a game of tic-tac-toe"
  (before
    (def game (game-controller/start { :player :X :player-first true}))
    (def state-callback-methods {:winner-method "win" :tied-method "tied"}))

  (it "POST '/squares/' should take a square"
    (let [response (execute-test game state-callback-methods)]
      (assert-response-ok response)
      (assert-correct-game game response)
      (assert-callback-method-is nil response)))

  (it "POST '/squares/' should win game"
    (let [winning-game (assoc game :board [[:X :X :_][:_ :_ :_][:_ :_ :_]])
          response (execute-test winning-game state-callback-methods)]
      (assert-response-ok response)
      (assert-correct-game winning-game response)
      (assert-callback-method-is "win" response)))

  (it "POST '/squares/' should tie game"
    (let [winning-game (assoc game :board [[:X :O :_]
                                           [:X :O :X]
                                           [:O :X :O]])
          response (execute-test winning-game state-callback-methods)]
      (assert-response-ok response)
      (assert-correct-game winning-game response)
      (assert-callback-method-is "tied" response))))


(describe "client side bug sending an invalid request"
  (it "GET '/invalid' should say Not Found"
      (let [response (get-request  "/invalid")]
        (should= 404 (:status response)))))
