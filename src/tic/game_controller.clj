(ns tic.game-controller
  (:require (tic [board :as board]
                 [ai-engine :as engine]
                 [game-state :as game-state :refer [get-gs]])))

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


(defn start [{:keys [player player-first]}]
   (let [game   {:player player
                 :computer (computer-name player)
                 :board (board/new-board)}
         updated-game (start-game game player-first)]
     updated-game))

(defn update-board-with-players-choice [game square]
  (assoc game :board (board/take-square (:board game) (:player game) square)))

(defn update-board-with-computers-choice [game]
  (assoc game :board (engine/computer-take-square game) :current-turn (:player game)))

(defn play-game [game square]
  (let  [player-turn-game (update-board-with-players-choice game square)]
    (if (board/all-squares-taken? (:board player-turn-game))
      player-turn-game
      (update-board-with-computers-choice player-turn-game))))

(defn get-opposing-player [game name]
  (if (= name (:player game))
    (:computer game)
    (:player game)))

(defn set-winner-and-loser [game winner]
  (assoc game :winner winner :loser (get-opposing-player game winner) :game-over true))


(defn execute-functions-if-game-over [{:keys [game win-fn, tie-fn]}]
  (let [board (:board game)]
    (cond
      (board/tie? board (:player game) (:computer game)) (tie-fn)
      (board/winner? board) (win-fn)
      :else game)))

(defn update-state-if-game-over [game game-listener]
  (execute-functions-if-game-over {
      :game game
      :tie-fn #(let [updated-game (assoc game :tie true :game-over true)]
                  (.tied game-listener updated-game)
                  updated-game)
      :win-fn #(let [updated-game (set-winner-and-loser game (board/winner (:board game)))]
                (.winner game-listener updated-game)
                updated-game)}))

(defn take-square [game square game-listener]
    (when-not (board/free? (:board game) square)
        (throw (IllegalStateException. "Square is already taken")))
  (let [game (play-game game square)]
    (.update-board! game-listener game)
    (update-state-if-game-over game game-listener)))
