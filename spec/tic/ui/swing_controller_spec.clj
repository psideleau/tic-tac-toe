(ns tic.ui.swing-controller-spec
  (:require [speclj.core :refer :all]
            [tic.board :as board]
            [tic.game-controller :as game-controller]
            [tic.ui.swing-controller :as swing-controller])
  (:import [tic.ui.swing_controller SquareWidget GameListener]))

(deftype SpySquareWidget [^{:volatile-mutable true} square-index
                          ^{:volatile-mutable true} current-state
                          ^{:volatile-mutable true} disabled]
  SquareWidget
    (square-index [this] square-index)
    (current-state [this] current-state)
    (set-taken-by! [this player] (set! current-state player))
    (set-disabled! [this disabled-param] (set! disabled disabled-param))
    (disabled? [this] disabled))

(def game-spy-data (atom {}))
(deftype SpyGameListener []
  GameListener
  (lost-game [this] (swap! game-spy-data assoc :lost-game-called true))
  (won-game  [this] (swap! game-spy-data assoc :won-game-called true))
  (tied-game [this] (swap! game-spy-data assoc :tied-game-called true)))

(describe "playing tic-tac-toe"
 (before
   (reset! game-spy-data {})
   (def squares (atom []))
   (def game-listener (SpyGameListener.))
   (dotimes [idx 9]
     (reset! squares (into @squares [(SpySquareWidget. idx  "X" true)])))
     (swing-controller/init! @squares))

  (context "starting a game"
    (it "should start game"
     (should (every? #(= (.current-state %) "_") (:ui-squares @swing-controller/state)))
     (should= (:game @swing-controller/state) (game-controller/start {:player :X :player-first true}))
     (should (every? #(= (.disabled? %) false)   (:ui-squares @swing-controller/state)))))


   (context "playing the game"
     (it "take an open square"
      (let  [ui-square (first @squares)]
        (swing-controller/take-square! ui-square game-listener)
        (let [game (:game @swing-controller/state)
              board (:board game)
              computer-ui-square (nth @squares (first (board/taken-squares board (:computer game))))]
          (should= 7 (count (board/open-squares board)))
          (should= "X" (.current-state ui-square))
          (should (.disabled? ui-square))
          (should-not (:lost-game-called @game-spy-data))
          (should-not (:won-game-called @game-spy-data))
          (should-not (:tied-game-called @game-spy-data))
          (should= "O" (.current-state computer-ui-square))
          (should (.disabled? computer-ui-square))))))


      (context "the game is over"
        (it "user won the game"
          (let  [ui-square (first @squares)]
          (with-redefs [board/tie? (fn [board player1 player2] false)
                        board/winner? (fn [board player] (= player :X))]
            (swing-controller/take-square! ui-square game-listener)
            (should (:won-game-called @game-spy-data))
            (should-not (:lost-game-called @game-spy-data))
            (should-not (:tied-game-called @game-spy-data)))))

       (it "computer won the game"
           (let  [ui-square (first @squares)]
             (with-redefs [board/tie? (fn [board player1 player2] false)
                           board/winner? (fn [board player] (= player :O))]
               (swing-controller/take-square! ui-square game-listener)
               (should-not (:won-game-called @game-spy-data))
               (should (:lost-game-called @game-spy-data))
               (should-not (:tied-game-called @game-spy-data)))))

       (it "game ended in a tie"
           (let  [ui-square (first @squares)]
             (with-redefs [board/tie? (fn [board player1 player2] true)
                           board/winner? (fn [board player] false)]
               (swing-controller/take-square! ui-square game-listener)
               (should-not (:won-game-called @game-spy-data))
               (should-not (:lost-game-called @game-spy-data))
               (should (:tied-game-called @game-spy-data)))))))


