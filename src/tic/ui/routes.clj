(ns tic.ui.routes
  (:require [compojure.core :refer [GET POST defroutes]]
            [ring.util.response :as response]
            [tic.ui.layout :as layout]
            [hiccup.element :as elm]
            (tic [game-controller :as game-controller]
                 [game-unmarshaller :as game-unmarshaller])
            )
  (:import (tic.game_controller GameListener)))

(deftype WebGameListener [callback-methods
                          callback-method-atom]
  GameListener
  (update-board! [this game] )
  (winner  [this game] (reset! callback-method-atom (:winner-method callback-methods)))
  (tied [this game] (reset! callback-method-atom (:tied-method callback-methods))))

(defn create-row [offset]
  [:div {:class "row"}
    (map (fn [id] [:div {:class "square"}
             [:input {:type "button" :name "square" :value (str (+ offset id))}]]) (range 3))])

(defn home []
  (layout/common [:h1 "Tic-Tac-Toe"]
                 [:div {:class "board"}
                  (create-row 0)
                  (create-row 3)
                  (create-row 6)
                 ]
                 (  elm/link-to "/start" "Start a game")))

(defn start-game []
  (response/response (game-controller/start {:player :X :player-first true})))

(defn take-square [square json-request]
  (let [callback-method-atom (atom nil)
        game-listener (WebGameListener. (:callback-methods json-request) callback-method-atom)
        unmarshalled-game (game-unmarshaller/unmarshall (:game json-request))
        updated-game (game-controller/take-square unmarshalled-game square game-listener)]
    (response/response  {:game updated-game :callback-method @callback-method-atom})))

(defroutes home-routes
  (GET "/" [] (home))
  (POST "/tic-tac-toe" [] (start-game))
  (POST "/squares/:id" [id :as request] (take-square (Integer/parseInt id) (:body request))))