(ns tic.ai-engine
  (:require [tic.board :as board]))

(declare minimax)
(declare minimax-for-open-postions)

(defn- next-player [first-player second-player player-turn]
  (if (= first-player player-turn)
    second-player
    first-player))

(defn- minimax-square [board
                      current-player
                      opposing-player
                      player-turn
                      square]
  (let [new-board (board/take-square board player-turn square)]
    (cond
      (board/winner? new-board current-player) 10
      (board/winner? new-board opposing-player) -10
      (board/tie?    new-board current-player opposing-player) 0
      :else (let [next-player (next-player current-player opposing-player player-turn)
                  next-board-states (board/open-squares new-board)]
              (minimax-for-open-postions new-board next-board-states current-player opposing-player next-player)))))

(defn- minimax-for-open-postions [board open-squares current-player opposing-player player-turn]
   (let [scores (map #(minimax-square board current-player opposing-player player-turn %) open-squares)]
     (if (= player-turn current-player)
       (apply max scores)
       (apply min scores)
       )))

(defn minimax
  ([board current-player opposing-player]
   (minimax board current-player opposing-player current-player))
  ([board current-player opposing-player player-turn]
    (let [open-squares (board/open-squares board)]
      (map #(minimax-square board current-player opposing-player player-turn %) open-squares))))


