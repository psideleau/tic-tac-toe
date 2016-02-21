(ns tic.game-unmarshaller)

(defn convert-board-to-keywords [board]
  (mapv (fn[row] (mapv keyword row)) board))

(defn convert-value-to-keyword [k v]
  (cond
    (string? v) (keyword v)
    (= :board k) (convert-board-to-keywords v)
    :else v))

(defn convert-map-keys-to-keywords [game]
  (into {}
    (for [k (keys game)]
      [(keyword k) (convert-value-to-keyword k (get game k))])))

(defn unmarshall [game]
  (let [converted-game  (convert-map-keys-to-keywords game)]
    converted-game))