(ns tic.ui.game-over)

(defn execute-if-game-over [{:keys [tie-fn win-fn game]}]
  (cond
    (and (:game-over game) (:tie game)) (tie-fn game)
    (and (:game-over game) (:winner game)) (win-fn game)))