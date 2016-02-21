(ns tic.client
  (:require [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [clojure.string :as str]))

(enable-console-print!)

(println "Hello world!")
(def game (atom {}))

(defn update-board [board]
      (println board)
  (let [values (concat (first board)(second board) (last board))]
    (doseq [square (map-indexed vector values)]
      (dommy/set-value! (sel1 (str "#square-" (first square))) (str (nth square 1))))))


(defn start-game-handler [response]
  (.log js/console "server responded..." (str response))
  (reset! game response)
      (update-board (:board response)))


(defn take-square-handler [response]
      (.log js/console "server responded..." (str response))
      (reset! game (:game response))
      (update-board (:board @game)))

(defn error-handler [{:keys [status status-text]}]
      (.log js/console (str "something bad happened: " status " " status-text)))

(defn start-game [e]
      (POST "/tic-tac-toe"
           {:handler start-game-handler
            :error-handler error-handler
            :format :json
            :keywords? true
            :response-format :json}))

(defn take-square [e]
      (let [square (last (str/split (.-id (.-target e)) "-"))]
           (println square square)
  (POST (str "/squares/" square)
        {:handler take-square-handler
         :error-handler error-handler
         :params {:game @game, :callback-methods{:winner-method "win" :tied-method "tied"}}
         :format :json
         :keywords? true
         :response-format :json})))

(defn say-hello [e]
      (do
      (.log js/console e)
      (println (.-id (.-target e)))))

      ;(GET "/tip"
      ;     {:params {:bill (dommy/value (sel1 :#bill)) :tip (dommy/value (sel1 :#tip))}
      ;      :handler handler
      ;      :error-handler error-handler
      ;      :format :json
      ;      :response-format :json}))
(defn init []
  (do
    (doseq [btn (sel [:.tic-btn])]
      (do
        (dommy/listen! btn :click take-square)))
    (dommy/listen! (sel1 :#start-game) :click start-game)))


(set! (.-onload js/window)  init)




