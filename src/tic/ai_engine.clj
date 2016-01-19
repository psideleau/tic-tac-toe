(ns tic.ai-engine
  (:require [tic.board :as board]))

(declare minimax-square)
(declare minimax-for-open-postions)
(def ^:const next-state-needed-for-score -1)
(defn- next-player [first-player second-player player-turn]
  (if (= first-player player-turn)
    second-player
    first-player))


(defn score [board current-player opposing-player]
  (cond
    (board/winner? board current-player) 10
    (board/winner? board opposing-player) -10
    (board/tie?    board current-player opposing-player) 0
    :else next-state-needed-for-score))

(defn- minimax-square [board
                      current-player
                      opposing-player
                      player-turn
                      square]
  (let [new-board (board/take-square board player-turn square)
        score (score new-board current-player opposing-player) ]
    (if (not= score next-state-needed-for-score)
      score
      (let [next-player (next-player current-player opposing-player player-turn)
            next-board-states (board/open-squares new-board)
            scores (map #(trampoline minimax-square new-board current-player opposing-player next-player %) next-board-states)]
        (if (= next-player current-player)
          (apply max scores)
          (apply min scores))))))


(defn minimax
  ([board current-player opposing-player]
   (minimax board current-player opposing-player current-player))
  ([board current-player opposing-player player-turn]
    (let [open-squares (board/open-squares board)]
      (map #(minimax-square board current-player opposing-player player-turn %) open-squares))))


