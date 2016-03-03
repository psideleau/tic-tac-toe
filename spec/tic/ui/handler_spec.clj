(ns tic.ui.handler-spec
  (:require [speclj.core :refer :all]
            [ring.mock.request :refer :all]
            [clojure.data.json :as json]
            [tic.ui.handler :refer :all]
            [tic.game-controller :as game-controller]))

(defn get-request [url]
  (app (request :get url)))

(describe "starting a game of tic-tac-toe"

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
  (json/write-str (game-controller/take-square game 2)))

(defn json-response-body [response]
  (json/read-str (:body response) :key-fn keyword))

(defn assert-response-ok [response]
  (should= 200 (:status response)))

(defn assert-correct-game [game response]
  (let [expected-game-json (expected-game-result-after-taking-the-third-square game)]
   (should= (json/read-str expected-game-json :key-fn keyword) (:game (json-response-body response)))))

(defn request-body [game]
  {:game game})

(defn execute-test [game]
  (-> (request-body game)
      (take-the-third-square)
      (app)))

(defn assert-callback-method-is [method response]
  (should= method (:callback-method (json-response-body response))))

(describe "playing a game of tic-tac-toe"
  (before
    (def game (game-controller/start { :player :X :player-first true})))

  (it "POST '/squares/' should take a square"
    (let [response (execute-test game)]
      (assert-response-ok response)
      (assert-correct-game game response)))

  (it "POST '/squares/' should win game"
    (let [winning-game (assoc game :board [[:X :X :_][:_ :_ :_][:_ :_ :_]])
          response (execute-test winning-game)]
      (assert-response-ok response)
      (assert-correct-game winning-game response)))

  (it "POST '/squares/' should tie game"
    (let [winning-game (assoc game :board [[:X :O :_]
                                           [:X :O :X]
                                           [:O :X :O]])
          response (execute-test winning-game)]
      (assert-response-ok response)
      (assert-correct-game winning-game response))))


(describe "client side bug sending an invalid request"
  (it "GET '/invalid' should say Not Found"
      (let [response (get-request  "/invalid")]
        (should= 404 (:status response)))))
