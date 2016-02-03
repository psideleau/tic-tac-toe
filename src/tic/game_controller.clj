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
    (if-not player-first
      (computer-goes-first game)
      game)))

(defn update-board-with-players-choice [game square]
  (assoc game :board (board/take-square (:board game) (:player game) square)))

(defn update-board-with-computers-choice [game]
  (assoc game :board (engine/computer-take-square game) :current-turn (:player game)))

(defn take-square [game square]
  (when-not (board/free? (:board game) square)
      (throw (IllegalStateException. "Square is already taken")))
  (let  [player-turn-game (update-board-with-players-choice game square)]
    (if (board/all-squares-taken? (:board player-turn-game))
      player-turn-game
      (update-board-with-computers-choice player-turn-game))))