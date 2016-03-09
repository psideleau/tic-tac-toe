(ns tic.ui.swing-controller-spec
  (:require [speclj.core :refer :all]
            (tic [board :as board]
                 [game-controller :as game-controller])
            [tic.ui.swing-controller :as swing-controller])
  (:import [tic.ui.swing_controller SquareWidget]
           [tic.game_controller GameListener]))

(deftype SpySquareWidget [^{:volatile-mutable true} square-index
                          ^{:volatile-mutable true} current-state
                          ^{:volatile-mutable true} disabled]
  SquareWidget
    (square-index [this] square-index)
    (current-state [this] current-state)
    (set-taken-by! [this player] (set! current-state player))
    (set-disabled! [this disabled-param] (set! disabled disabled-param))
    (disabled? [this] disabled))


(declare squares)


(describe "playing tic-tac-toe"
 (before
   (def squares (atom []))
   (dotimes [idx 9]
     (reset! squares (into @squares [(SpySquareWidget. idx  "X" true)])))
     (swing-controller/init! @squares))

 (context "starting a game"
   (it "should start game"
    (should (every? #(= (.current-state %) "_") (:ui-squares @swing-controller/state)))
     (should= @swing-controller/state (game-controller/start
                                                             {:player :X
                                                              :player-first true
                                                              }))
    (should (every? #(= (.disabled? %) false)   (:ui-squares @swing-controller/state)))))

 (context "playing the game"
   (it "take an open square"
    (let  [ui-square (first @squares)]
      (swing-controller/take-square! ui-square @squares)
      (let [game @swing-controller/state
            board (:board game)
            computer-ui-square (nth @squares (first (board/taken-squares board (:computer game))))]
        (should= 7 (count (board/open-squares board)))
        (should= "X" (.current-state ui-square))
        (should (.disabled? ui-square))
        (should= "O" (.current-state computer-ui-square))
        (should (.disabled? computer-ui-square)))))))

