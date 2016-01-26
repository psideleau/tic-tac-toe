(ns tic.ai-engine
  (:require [tic.board :as board]))

(declare minimax-square)
(declare minimax-for-open-postions)
(defn minimax-square-stack
  [{:keys [board
           current-player
           opposing-player
           square
           depth] :as params}]
  (let [new-board (board/take-square board (:mark-char current-player) square)]
    (cond
      (board/winner? new-board (:mark-char current-player)) (- (:winner-score current-player) depth)
      (board/game-over? new-board) 0
      :else
          (let [scores (map #(minimax-square-stack {:board new-board
                                        :current-player opposing-player
                                        :opposing-player current-player
                                        :depth (inc depth)
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
                               :depth 0
                               :square %}) (board/open-squares board)))

(defn- square-index-with-max-score [scores max-score]
  (let [filter-fn (fn [idx v] (if (= v max-score) idx))
        square-indexes-with-max-score (keep-indexed filter-fn scores)]
    (first square-indexes-with-max-score)))

(defn- make-first-move [{:keys [board computer]} selection-fn]
  (let [game-winning-squares [0 2 4 6 8]
        random-winning-square (selection-fn game-winning-squares)]
    (board/take-square board computer random-winning-square)))

(defn- make-move [{:keys [board computer player]}]
  (let [open-squares (board/open-squares board)
        scores (minimax board computer player)
        max-score (apply max scores)
        winning-square (nth open-squares (square-index-with-max-score scores max-score))]
    (print scores)
    (board/take-square board computer winning-square)))

(defn computer-take-square
  ([params]
   (computer-take-square params rand-nth))
  ([{:keys [board computer player] :as params} selection-fn]
  (if (board/new-game? board)
    (make-first-move params selection-fn)
    (make-move params))))




