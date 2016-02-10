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


(defn start! [{:keys [player player-first game-state]}]
   (let [game   {:player player
                 :computer (computer-name player)
                 :board (board/new-board)}
         updated-game (start-game game player-first)]
     (.set-game! game-state updated-game)
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
  (.set-final-results! game-state {:winner winner
                                   :loser (get-opposing-player (.game game-state) winner)
                                   :game-over true}))


(defn execute-functions-if-game-over [{:keys [game-state win-fn, tie-fn]}]
  (let [game  (.game game-state)
        board (:board game)]
    (cond
      (board/tie? board (:player game) (:computer game)) (tie-fn)
      (board/winner? board) (win-fn))))

(defn update-state-if-game-over! [game-state game-listener]
  (execute-functions-if-game-over {
      :game-state game-state
      :tie-fn #(do
                  (.set-final-results! game-state {:tie true :game-over true})
                  (.tied game-listener (.game game-state)))
      :win-fn #(do
                (set-winner-and-loser game-state (board/winner (get-gs game-state :board)))
                (.winner game-listener (.game game-state)))}))

(defn take-square! [game-state square game-listener]
    (when-not (board/free? (get-gs game-state :board) square)
        (throw (IllegalStateException. "Square is already taken")))
    (play-game! game-state square)
    (.update-board! game-listener (.game game-state))
    (update-state-if-game-over! game-state game-listener))

(defn game-over? [game-state]
  (let [return-true-fn (fn [] true)]
    (execute-functions-if-game-over {:game-state game-state
                                 :tie-fn return-true-fn
                                 :win-fn return-true-fn })))