(ns tic.board)

(defn- empty-row []
  (vec (take 3 (repeat :empty))))

(defn- coordinate [piece]
  {:row (quot piece 3) :col (rem piece 3)})

(defn- get-board-piece-val [board row col]
  (nth (nth board row) col))

(defn- get-board-piece [board piece]
  (let [coordinate  (coordinate piece)]
    (get-board-piece-val board (:row coordinate) (:col coordinate))))

(defn- play-marked-all-of? [col player]
  (every? (fn [piece] (= piece player)) col))

(defn- is-winner-accross? [board player]
  (some #(play-marked-all-of? % player) board))

(defn- get-piece-vals-top-to-bottom [board col]
  (for [row (range 3)]
    (get-board-piece-val board row col)))

(defn- is-winner-top-to-bottom? [board player]
  (or
    (play-marked-all-of? (get-piece-vals-top-to-bottom board 0) player)
    (play-marked-all-of? (get-piece-vals-top-to-bottom board 1) player)
    (play-marked-all-of? (get-piece-vals-top-to-bottom board 2) player)))

(defn- get-piece-vals-top-left-to-bottom-right [board]
  (for [idx (range 3) ]
    (get-board-piece-val board idx idx)))

(defn- get-piece-vals-bottom-left-to-top-right [board]
  (loop [row 2 col 0 vals []]
    (if (> col 2)
      vals
      (recur (dec row) (inc col) (conj  vals (get-board-piece-val board row col))))))

(defn- is-winner-diagonal? [board player]
  (or
    (play-marked-all-of? (get-piece-vals-top-left-to-bottom-right board) player)
    (play-marked-all-of? (get-piece-vals-bottom-left-to-top-right board) player)))

(defn winner? [board player]
  (or
    (is-winner-accross? board player)
    (is-winner-top-to-bottom? board player)
    (is-winner-diagonal? board player)
  ))

(defn free? [board piece]
  (= :empty (get-board-piece board piece)))

(defn new-board[]
  (vec (take 3 (repeatedly empty-row))))

(defn mark-col [col player idx]
  (assoc col idx player))

(defn move [board player piece]
  (let [coordinate (coordinate piece)]
    (assoc board (:row coordinate) (mark-col (nth board (:row coordinate)) player (:col coordinate)))
    ))