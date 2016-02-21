(ns tic.ui.console-ui
  (:require (tic  [game-controller :as controller])))

(defn print-console [msg]
  (do
    (println msg)
    (flush)))

(defn game-listener []
  (reify
    controller/GameListener
    (update-board! [this game]
      (print-console (:board game)))
    (winner  [this game]
      (print-console (str (:winner game) " has won The Game")))
    (tied [this game] (print-console "The game has ended in a tie"))))

(defn play-game
  ([]
   (play-game (game-listener)))
  ([game-listener]
    (loop [game (controller/start {:player :X :player-first true})]
      (if-not (:game-over game)
        (do
          (println game)
          (print-console "Take Square [0-8]")
          (let [square (read-line)]
          (recur (controller/take-square game (Integer/parseInt square) game-listener))))))))

