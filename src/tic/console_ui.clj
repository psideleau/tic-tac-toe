(ns tic.console-ui
  (:require [tic.game-controller :as controller]
            [tic.board :as board]))

(def game (atom {}))

(defn current-game []
  @game)

(defn play-game []
  (do
    (println "Would you like to go first? [true/false]")
    (flush)

    (let [player-first (Boolean/parseBoolean (read-line))]
      (reset! game (controller/start {:player :X :player-first player-first}))
      (println "game" @game)
      (flush)

      (while (not (or (board/winner? (:board @game)) (board/all-squares-taken? (:board @game))))
        (println "Take square: ")
        (let [square (Integer/parseInt (read-line))]
          (reset! game (controller/take-square @game square))
          (println (:board @game))
          (flush)))

      (if (board/tie? (:board @game) (:player @game) (:computer @game))
        (println "The game ends in a tie")
        (println "The winner is " (board/winner (:board @game)))))))

