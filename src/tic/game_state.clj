(ns tic.game-state)

(defprotocol GameState
  (game [this])
  (set-game! [this game])
  (set-final-results! [this result-map]))

(deftype MemoryGameState [game-state]
  GameState
  (game [this] @game-state)
  (set-final-results! [this result-map]  (swap! game-state merge result-map))
  (set-game! [this game] (reset! game-state game)))

(defn get-gs [game-state property]
  (get (.game game-state) property))

(defn memory-game-state []
  (MemoryGameState. (atom {})))



