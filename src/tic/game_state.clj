(ns tic.game-state)

(defprotocol GameState
  (game [this])
  (board [this])
  (set-winner! [this player])
  (set-loser! [this player])
  (set-tie! [this])
  (winner [this])
  (loser [this])
  (tie? [this])
  (register-callback-functions! [this functions])
  (set-game! [this game]))


(deftype MemoryGameState [game-state]
  GameState
  (board [this] (:board @game-state))
  (game [this] @game-state)
  (set-winner! [this player] (swap! game-state assoc :winner player))
  (set-loser! [this player] (swap! game-state assoc :loser player))
  (set-tie! [this] (swap! game-state assoc :tie true))
  (tie? [this] (:tie @game-state))
  (winner [this] (:winner @game-state))
  (loser [this] (:loser @game-state))
  (set-game! [this game] (reset! game-state game)))

(defn memory-game-state []
  (MemoryGameState. (atom {})))

