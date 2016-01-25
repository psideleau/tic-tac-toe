(ns tic.game-controller
  (:require [tic.board :as board]
            [tic.ai-engine :as engine]))

(defn- computer-name [player]
  (if (= player :X)
    :O
    :X))

(defn- first-player [player player-first]
  (if (= true player-first)
    player
    (computer-name player)))

(defn start [{:keys [player player-first]}]
  {:player player
   :computer (computer-name player)
   :winner false
   :current-turn (first-player player player-first)
   :board (board/new-board)})

(defn take-square [game square]
  (let  [player-turn (assoc game :board (board/take-square (:board game) (:player game) square))
         computer-turn (assoc game :board (engine/select-square player-turn))]
         computer-turn))