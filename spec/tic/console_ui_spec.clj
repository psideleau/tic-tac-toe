(ns tic.console-ui-spec
  (:require [speclj.core :refer :all]
            [tic.console-ui :as ui]
            [tic.board :as board]
            [tic.game-controller :as game-controller]))

(defn make-input [coll]
  (apply str (interleave coll (repeat "\n"))))

(describe "playing a tic-tac-toe game via console"
 (it "should play a game"
   (do
      (with-redefs [game-controller/take-square! (fn[game square]
                                                  (let [new-board (board/take-square (:board game) (:player game) square)]
                                                    (reset! ui/game (assoc game :board new-board))))]
      (with-in-str (make-input ["true" 0 1 2])
                   (ui/play-game))
      (let [game ui/game]
        (should (board/winner? (:board @game) :X)))))))




