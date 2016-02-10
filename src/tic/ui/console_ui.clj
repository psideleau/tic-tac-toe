(ns tic.ui.console-ui
  (:require (tic  [game-controller :as controller]
                  [game-state :as game-state])))

(defn print-console [msg]
  (do
    (println msg)
    (flush)))

(defn game-listener [game-state]
  (reify
    controller/GameListener
    (update-board! [this game]
      (print-console (:board game)))
    (winner  [this game]
      (print-console (str (:winner game) " has won The Game")))
    (tied [this game] (print-console "The game has ended in a tie"))))


(defn play-game
  ([]
   (play-game (game-state/memory-game-state)))
  ([game-state]
    (do
      (let [game-listener (game-listener game-state)]
        (controller/start! {:player :X :player-first true :game-state game-state})
        (while (not (game-state/get-gs game-state :game-over))
          (println (.game game-state))
          (print-console "Take Square [0-8]")
          (let [square (read-line)]
            (controller/take-square! game-state (Integer/parseInt square) game-listener)))))))

