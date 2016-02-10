(ns tic.ui.swing-controller
  (:require (tic [game-controller :as game-controller]
                 [board :as board]
                 [game-state :as game-state])))

(defprotocol SquareWidget
  (square-index [this])
  (current-state [this])
  (set-taken-by! [this player])
  (set-disabled! [this disabled])
  (disabled? [this]))

(def state
  (atom {:game-state (game-state/memory-game-state)}))

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

(defn take-square! [ui-square game-listener]
  (game-controller/take-square! (:game-state @state) (square-index ui-square) game-listener))

(defn init! [ui-squares]
  (game-controller/start! {:player :X :player-first true :game-state (:game-state @state)})
  (doseq [square ui-squares]
    (set-disabled! square false)
    (set-taken-by! square "_")))