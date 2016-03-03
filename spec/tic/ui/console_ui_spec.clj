(ns tic.ui.console-ui-spec
  (:require [speclj.core :refer :all]
            [tic.ui.console-ui :as ui]
            (tic [board :as board]
                 [game-controller :as game-controller]
                 [game-state :as game-state]))
  (:import [tic.game_controller GameListener]))

(def game-spy-data (atom {}))



(defn make-input [coll]
  (apply str (interleave coll (repeat "\n"))))

(describe "playing a tic-tac-toe game via console"
 (it "should play a game"
    (with-redefs [game-controller/take-square (fn[game square]
                                                 (let [updated-game  {:winner :X :game-over true :loser :0}]
                                                   (reset! game-spy-data updated-game)
                                                   updated-game))]
    (with-in-str "0" (ui/play-game ))
    (should= :X (:winner @game-spy-data)))))




