(ns tic.ui.console-ui
  (:require (tic  [game-controller :as controller])
            [tic.ui.game-over :as game-over]))

(defn print-console [msg]
  (do
    (println msg)
    (flush)))

(defn winner  [game]
      (print-console (str (:winner game) " has won The Game")))

(defn tied [game]
  (print-console "The game has ended in a tie"))

(defn play-game []
    (loop [game (controller/start {:player :X :player-first true})]
      (if-not (:game-over game)
        (do
          (print-console (:board game))
          (print-console "Take Square [0-8]")
          (let [square (read-line)
                game (controller/take-square game (Integer/parseInt square))]
            (game-over/execute-if-game-over {:tie-fn tied :win-fn winner :game game} )
            (recur game))))))

