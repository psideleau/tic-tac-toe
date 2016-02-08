(ns tic.game-controller
  (:require [tic.board :as board]
            [tic.ai-engine :as engine]
            [tic.game-state :as game-state]))

(defprotocol GameListener
  (update-board! [this game])
  (winner [this game])
  (tied [this game]))

(defn- computer-name [player]
  (if (= player :X)
    :O
    :X))

(defn- computer-goes-first [game]
  (assoc game :board (engine/computer-take-square game) :current-turn (:player game)))

(defn- start-game [game player-first]
  (if-not player-first
    (computer-goes-first game)
    game))

(defn- valid-game-state [game-state]
  (if game-state
    game-state
    (game-state/memory-game-state)))

(defn start! [{:keys [player player-first game-state]}]
   (let [game   {:player player
                 :computer (computer-name player)
                 :board (board/new-board)}
         updated-game (start-game game player-first)
         valid-game-state (valid-game-state game-state)]
     (.set-game! valid-game-state updated-game)
     updated-game))

(defn update-board-with-players-choice [game square]
  (assoc game :board (board/take-square (:board game) (:player game) square)))

(defn update-board-with-computers-choice [game]
  (assoc game :board (engine/computer-take-square game) :current-turn (:player game)))

(defn play-game! [game-state square]
  (let  [player-turn-game (update-board-with-players-choice (.game game-state) square)]
    (if (board/all-squares-taken? (:board player-turn-game))
      (.set-game! game-state player-turn-game)
      (.set-game! game-state (update-board-with-computers-choice player-turn-game)))))

(defn get-opposing-player [game name]
  (if (= name (:player game))
    (:computer game)
    (:player game)))

(defn set-winner-and-loser [game-state winner]
  (let [game (.game game-state)]
    (doto game-state
      (.set-winner! winner)
      (.set-loser!  (get-opposing-player game winner)))))

(defn notify-game-over! [game-state update-fn game-over-fn]
  (update-fn game-state)
  (if game-over-fn
    (game-over-fn game-state)))

(defn update-state-if-game-over! [game-state game-listener]
  (let [board (.board game-state)
        game  (.game game-state)]
    (cond
      (board/tie? board (:player game) (:computer game))
        (do
          (.set-tie! game-state)
          (.tied game-listener (.game game-state)) )
      (board/winner? board)
          (do
            (set-winner-and-loser game-state (board/winner board))
            (.winner game-listener (.game game-state))))))

(defn take-square!
  ([game-state square]
    (take-square! game-state square nil))
  ([game-state square game-listener]
    (when-not (board/free? (.board game-state) square)
        (throw (IllegalStateException. "Square is already taken")))
    (play-game! game-state square)
    (.update-board! game-listener (.game game-state))
    (update-state-if-game-over! game-state game-listener)))