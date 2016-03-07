(ns tic.ui.routes
  (:require [compojure.core :refer [GET POST defroutes]]
            [ring.util.response :as response]
            (tic [game-controller :as game-controller]
                 [game-unmarshaller :as game-unmarshaller]
                 )))

(defn start-game []
  (response/response (game-controller/start {:player :X :player-first true})))

(defn take-square [square json-request]
  (let [unmarshalled-game (game-unmarshaller/unmarshall (:game json-request))
        updated-game (game-controller/take-square unmarshalled-game square)]
    (response/response  {:game updated-game})))

(defroutes home-routes
  (POST "/tic-tac-toe" [] (start-game))
  (POST "/squares/:id" [id :as request] (take-square (Integer/parseInt id) (:body request))))