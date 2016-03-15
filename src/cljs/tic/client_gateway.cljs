(ns tic.client-gateway
  (:require
    [ajax.core :refer [GET POST]]))

(def rows 3)

(defn start-game [start-game-handler error-handler]
  (POST "/tic-tac-toe"
        {:handler start-game-handler
         :error-handler error-handler
         :format :json
         :keywords? true
         :response-format :json}))

(defn take-square [{:keys [row col take-square-handler error-handler game]}]
  (let [square (+ (* row 3) col)]
    (POST (str "/squares/" square)
          {:handler take-square-handler
           :error-handler error-handler
           :params {:game game}
           :format :json
           :keywords? true
           :response-format :json})))


