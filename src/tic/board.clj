(ns tic.board)

(defn- empty-row []
  (vec (take 3 (repeat :_))))

(defn- coordinate [square]
  {:row (quot square 3) :col (rem square 3)})

(defn- board-square-val [board row col]
  (nth (nth board row) col))

(defn- get-board-square [board square]
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
      (recur (dec row) (inc col) (conj  vals (board-square-val board row col))))))

(defn- winner-diagonal? [board player]
  (or
    (play-marked-all-of? (square-vals-top-left-to-bottom-right board) player)
    (play-marked-all-of? (square-vals-bottom-left-to-top-right board) player)))

(defn winner? [board player]
  (or
    (is-winner-accross? board player)
    (winner-top-to-bottom? board player)
    (winner-diagonal? board player)
  ))

(defn free? [board square]
  (= :_ (get-board-square board square)))

(defn new-board[]
  (vec (take 3 (repeatedly empty-row))))

(defn- mark-col [col player idx]
  (assoc col idx player))

(defn take-square [board player square]
  (let [coordinate (coordinate square)]
    (assoc board (:row coordinate) (mark-col (nth board (:row coordinate)) player (:col coordinate)))
    ))

(defn game-over? [board]
  (every? #(not (free? board %)) (range 9)))

(defn tie? [board player1 player2]
  (and (game-over? board) (not (or (winner? board player1) (winner? board player2)))))

(defn open-squares [board]
  (filter #(free? board %) (range 9)))