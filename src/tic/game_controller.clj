(ns tic.game-controller
  (:require [tic.board :as board]
            [tic.ai-engine :as engine]))

(defn- computer-name [player]
  (if (= player :X)
    :O
    :X))

(defn- computer-goes-first [game]
  (assoc game :board (engine/computer-take-square game) :current-turn (:player game)))

(defn start [{:keys [player player-first]}]
  (let [game   {:player player
                :computer (computer-name player)
                :winner false
                :current-turn player
                :board (board/new-board)}]
    (if (not player-first)
      (computer-goes-first game)
      game)))

(defn take-square [game square]
  (if (board/free? (:board game) square)
    (let  [player-turn-game (assoc game :board (board/take-square (:board game) (:player game) square))]
      (if (board/all-squares-taken? (:board player-turn-game))
        player-turn-game
        (assoc game :board (engine/computer-take-square player-turn-game) :current-turn (:player game))))
    (throw (IllegalStateException. "Square is already taken"))))