(ns tic.board)

(def ^:const total-squares 9)

(defn- empty-row []
  (vec (take 3 (repeat :_))))

(defn- coordinate [square]
  {:row (quot square 3) :col (rem square 3)})

(defn- board-square-val [board row col]
  (nth (nth board row) col))

(defn get-board-square [board square]
  (let [coordinate  (coordinate square)]
    (board-square-val board (:row coordinate) (:col coordinate))))

(defn- play-marked-all-of? [col player]
  (every? (fn [square] (= square player)) col))

(defn- is-winner-accross? [board player]
  (some #(play-marked-all-of? % player) board))

(defn- square-vals-top-to-bottom [board col]
  (for [row (range 3)]
    (board-square-val board row col)))

(defn- winner-top-to-bottom? [board player]
  (or
    (play-marked-all-of? (square-vals-top-to-bottom board 0) player)
    (play-marked-all-of? (square-vals-top-to-bottom board 1) player)
    (play-marked-all-of? (square-vals-top-to-bottom board 2) player)))

(defn- square-vals-top-left-to-bottom-right [board]
  (for [idx (range 3) ]
    (board-square-val board idx idx)))

(defn- square-vals-bottom-left-to-top-right [board]
  (loop [row 2 col 0 vals []]
    (if (> col 2)
      vals
      (recur (dec row) (inc col) (conj vals (board-square-val board row col))))))

(defn- winner-diagonal? [board player]
  (or
    (play-marked-all-of? (square-vals-top-left-to-bottom-right board) player)
    (play-marked-all-of? (square-vals-bottom-left-to-top-right board) player)))

(declare winner)
(defn winner?
  ([board]
     (not (= :_ (winner board))))
  ([board player1 player2]
   (or (winner? board player1) (winner? board player2)))
  ([board player]
    (or
      (is-winner-accross? board player)
      (winner-top-to-bottom? board player)
      (winner-diagonal? board player))))

(defn free? [board square]
  (= :_ (get-board-square board square)))

(defn new-board[]
  (vec (take 3 (repeatedly empty-row))))

(defn- players [board]
  (->> (range total-squares)
       (filter #(not (free? board %)))
       (map #(get-board-square board %))
       (into [])
       (set)))

(defn winner [board]
  (let [players (players board)
        player1 (first players)
        player2 (second players)]
    (cond
      (winner? board player1) player1
      (winner? board player2) player2
      :else :_)))


(defn- mark-col [col player idx]
  (assoc col idx player))

(defn take-square [board player square]
  (let [coordinate (coordinate square)]
    (assoc board (:row coordinate) (mark-col (nth board (:row coordinate)) player (:col coordinate)))))

(defn all-squares-taken? [board]
  (every? #(not (free? board %)) (range total-squares)))

(defn tie? [board player1 player2]
  (and (all-squares-taken? board) (not (or (winner? board player1) (winner? board player2)))))

(defn find-squares-matching [predicate]
  (filter predicate (range total-squares)))

(defn open-squares [board]
  (find-squares-matching #(free? board %)))

(defn taken-squares [board player]
  (find-squares-matching #(= player (get-board-square board %))))

(defn new-game? [board]
  (= total-squares (count (open-squares board))))