(ns tic.ui.routes
  (:require [compojure.core :refer [GET POST defroutes]]
            [ring.util.response :as response]
            [tic.ui.layout :as layout]
            [hiccup.element :as elm]
            (tic [game-controller :as game-controller]
                 [game-unmarshaller :as game-unmarshaller]
                 )))

(defn create-row [offset]
  [:div {:class "row"}
    (map (fn [id] [:div {:class "square"}
             [:input {:type "button" :class "tic-btn" :name "square" :value "_" :id (str "square-" (+ offset id))}]]) (range 3))])

(defn home []
  (layout/common [:h1 "Tic-Tac-Toe"]
                 [:div {:class "board"}
                  (create-row 0)
                  (create-row 3)
                  (create-row 6)
                 ]
                 [:a  {:href "#" :id "start-game"} "start game" ]))

(defn start-game []
  (response/response (game-controller/start {:player :X :player-first true})))

(defn take-square [square json-request]
  (let [unmarshalled-game (game-unmarshaller/unmarshall (:game json-request))
        updated-game (game-controller/take-square unmarshalled-game square)]
    (response/response  {:game updated-game})))

(defroutes home-routes
  (GET "/" [] (home))
  (POST "/tic-tac-toe" [] (start-game))
  (POST "/squares/:id" [id :as request] (take-square (Integer/parseInt id) (:body request))))