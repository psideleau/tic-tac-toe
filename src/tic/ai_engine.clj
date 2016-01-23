(ns tic.ai-engine
  (:require [tic.board :as board]))

(declare minimax-square)
(declare minimax-for-open-postions)

(defn- next-player [{:keys [current-player opposing-player player-turn]}]
  (if (= current-player player-turn)
    opposing-player
    current-player))

(defn minimax-square
  [{:keys [board
           current-player
           opposing-player
           player-turn
           square] :as params}]
  (let [new-board (board/take-square board player-turn square)]
    (cond
      (board/winner? new-board current-player) 10
      (board/winner? new-board opposing-player) -10
      (board/tie?    new-board current-player opposing-player) 0
      :else
          (let [next-player (next-player params)
                scores (map #(minimax-square (assoc params :board new-board
                                        :player-turn next-player
                                        :square %))  (board/open-squares new-board))]
          (if (= next-player current-player)
            (apply max scores)
            (apply min scores))))))

(defn minimax [board current-player opposing-player]
    (map #(minimax-square {:board board
                           :current-player current-player
                           :opposing-player opposing-player
                           :player-turn current-player
                           :square %}) (board/open-squares board)))


