(ns tic.ui.console-ui-spec
  (:require [speclj.core :refer :all]
            [tic.ui.console-ui :as ui]
            (tic [board :as board]
                 [game-controller :as game-controller]
                 [game-state :as game-state])))

(defn make-input [coll]
  (apply str (interleave coll (repeat "\n"))))

(describe "playing a tic-tac-toe game via console"
 (it "should play a game"
   (let [game-state (game-state/memory-game-state)]
      (with-redefs [game-controller/take-square! (fn[game-state square game-listener]
                                                   (.set-final-results! game-state {:winner :X :game-over true :loser :0} )
                                                   (.winner game-listener (.game game-state)))]
      (with-in-str "0" (ui/play-game game-state))
      (should= :X (game-state/get-gs game-state :winner))))))




