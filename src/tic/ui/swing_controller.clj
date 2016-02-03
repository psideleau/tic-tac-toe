(ns tic.ui.swing-controller
  (:require [tic.game-controller :as game-controller]
            [tic.board :as board]))

(defprotocol SquareWidget
  (square-index [this])
  (current-state [this])
  (set-taken-by! [this player])
  (set-disabled! [this disabled])
  (disabled? [this]))

(defprotocol GameListener
  (lost-game [this])
  (won-game [this])
  (tied-game [this]))

(def state
  (atom {:game []
         :ui-squares []}))

(defn player-name [board ui-square]
  (name (board/get-board-square board  (square-index ui-square))))

(defn update-ui-square-if-taken! [board ui-square]
  (when-not (board/free? board (square-index ui-square))
    (doto ui-square
      (set-taken-by! (player-name board ui-square))
      (set-disabled! true))))

(defn update-board-ui! [ui-squares game]
  (dotimes [idx board/total-squares]
    (let [ui-square (nth ui-squares idx)]
      (update-ui-square-if-taken! (:board game) ui-square))))

(defn update-state! [game]
  (swap! state assoc :game game))

(defn notify-user-if-game-is-over! [game game-listener]
  (let [board (:board game)]
    (cond
      (board/tie? board (:player game) (:computer game)) (tied-game game-listener)
      (board/winner? board (:player game)) (won-game game-listener)
      (board/winner? board (:computer game)) (lost-game game-listener))))

(defn take-square! [ui-square game-listener]
  (let [game (game-controller/take-square (:game @state) (square-index ui-square))]
    (update-board-ui! (:ui-squares @state) game)
    (update-state! game)
    (notify-user-if-game-is-over! game game-listener)))

(defn init! [ui-squares]
  (swap! state assoc :ui-squares ui-squares :game (game-controller/start {:player :X :player-first true}))
  (doseq [square ui-squares]
    (set-disabled! square false)
    (set-taken-by! square "_")))