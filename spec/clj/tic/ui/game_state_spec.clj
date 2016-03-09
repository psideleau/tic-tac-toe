(ns tic.ui.game-state-spec
  (:require [speclj.core :refer :all]
            [tic.ui.game-over :as game-state]))



(describe "should detect that game it over"
  (before
    (def games-state-spy (atom {})))
    (def win-fn (fn[game] (reset! games-state-spy {:winner-called true})))
    (def tie-fn (fn[game] (reset! games-state-spy {:tied-called true})))

 (it "should detect that a player won the game"
    (let [game {:winner :X :loser :O :game-over true}]
      (game-state/execute-if-game-over {:tie-fn tie-fn :win-fn win-fn  :game game})
      (should (:winner-called @games-state-spy))))

  (it "should detect that a player tied-"
    (let [game {:tie true :game-over true}]
      (game-state/execute-if-game-over {:tie-fn tie-fn :win-fn win-fn  :game game})
      (should (:tied-called @games-state-spy))))

  (it "game should not be over"
      (let [game {}]
        (game-state/execute-if-game-over {:tie-fn tie-fn :win-fn win-fn  :game game})
        (should-not (:tied-called @games-state-spy))
        (should-not (:winner-called @games-state-spy)))))




