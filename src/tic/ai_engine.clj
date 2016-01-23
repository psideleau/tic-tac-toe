(ns tic.ai-engine
  (:require [tic.board :as board]))

(declare minimax-square)
(declare minimax-for-open-postions)


(defn minimax-square-stack
  [{:keys [board
           current-player
           opposing-player
           square] :as params}]
  (let [new-board (board/take-square board (:mark-char current-player) square)]
    (cond
      (board/winner? new-board (:mark-char current-player)) (:winner-score current-player)
      (board/game-over? new-board) 0
      :else
          (let [scores (map #(minimax-square-stack {:board new-board
                                        :current-player opposing-player
                                        :opposing-player current-player
                                        :square %})  (board/open-squares new-board))]
            (apply (:score-selection-fn opposing-player) scores)))))

(defn minimax-square2
[{:keys [board
         current-player
         opposing-player
         square] :as params}]
(let [new-board (board/take-square board (:mark-char current-player) square)]
  (cond
    (board/winner? new-board (:mark-char current-player)) (:winner-score current-player)
    (board/game-over? new-board) 0
    :else
    (loop [squares (board/open-squares new-board)
           scores  []]
        (if (empty? squares)
          (apply (:score-selection-fn opposing-player) scores)
          (recur (rest squares)
               (conj scores (minimax-square2 {:board new-board
                                            :current-player opposing-player
                                            :opposing-player current-player
                                            :square (first squares)}))))))))


(defn minimax [board current-player opposing-player]
    (map #(minimax-square-stack {:board board
                           :current-player {:mark-char current-player
                                            :winner-score 10
                                            :score-selection-fn max}
                           :opposing-player {:mark-char opposing-player
                                             :winner-score -10
                                             :score-selection-fn min
                                             }
                           :square %}) (board/open-squares board)))


