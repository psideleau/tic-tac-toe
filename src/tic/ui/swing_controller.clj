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

(defn take-square! [ui-square, game-listener]
  (let [game (game-controller/take-square (:game @state) (square-index ui-square))
        board (:board game)]
    (dotimes [idx board/total-squares]
      (let [ui-square (nth (:ui-squares @state) idx)]
        (when-not (board/free? board idx)
          (doto ui-square
            (set-taken-by! (name (board/get-board-square board idx)))
            (set-disabled! true)))))
   (swap! state assoc :game game)
    (cond
      (board/tie? board (:player game) (:computer game)) (tied-game game-listener)
      (board/winner? board (:player game)) (won-game game-listener)
      (board/winner? board (:computer game)) (lost-game game-listener))))

(defn init! [ui-squares]
  (swap! state assoc :ui-squares ui-squares :game (game-controller/start {:player :X :player-first true}))
  (doseq [square ui-squares]
    (set-disabled! square false)
    (set-taken-by! square "_")))