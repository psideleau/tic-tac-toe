(ns tic.ai-engine-spec
  (:require [speclj.core :refer :all]
            (tic [board :as board]
                 [ai-engine :as engine])))

(def corner-squares [0 2 6 8])
(def edge-squares [1 3 5 7])
(def center-square 4)
(def first-choice-squares (sort (concat corner-squares [center-square])))

(describe "computer starting the game"
  (it "should always pick a corner or the center"
    (let
      [spy-eligible-first-choice-squares (atom [])
       stub-select-center-fn (fn [col]
                                   (reset! spy-eligible-first-choice-squares col)
                                  center-square)
      board-after-selection (engine/computer-take-square {:board (board/new-board) :computer :X :player :0} stub-select-center-fn)]
      (should  (every? #(board/free? board-after-selection %) edge-squares))
      (should= first-choice-squares @spy-eligible-first-choice-squares)
      (should-not (board/free? board-after-selection center-square)))))

(describe "computer wins the game"
  (it "should win game"
    (let [board (engine/computer-take-square {:board [[:O :_ :X]
                                                 [:X :_ :_]
                                                 [:X :O :O]]
                                       :computer     :O :player :X} rand-nth)]
    (should= [[:O :_ :X]
              [:X :O :_]
              [:X :O :O]] board)
    (should (board/winner? board :O)))))

(describe "the possible moves of a board"
  (context "get minimax scores"
  (it "should be 10 when X has immediate win"
   (should= '(10) (engine/minimax [[:X :X :O]
                                   [:O :O :X]
                                   [:X :X :_]] :X :O)))
  (it "should be tie when there is no way to win"
   (should= '(0) (engine/minimax [[:X :X :O]
                                  [:O :O :_]
                                  [:X :X :O]] :X :O)))
  (it "should be 10 when O has immeidate win"
   (should= '(10) (engine/minimax [[:X :X :O]
                                   [:O :O :_]
                                   [:X :X :O]] :O :X)))

  (it "there should only be one way to win"
   (should= '(-11 10 -11) (engine/minimax [[:O :_ :X]
                                           [:X :_ :_]
                                           [:X :O :O]] :X :O)))

  (it "immediate wins should be scored higher"
   (should= '(10 8 10 8 8) (engine/minimax [[:_ :_ :X]
                                            [:X :_ :_]
                                            [:X :_ :O]] :X :O)))

  (it "X will always win but it should pick the immeidate win"
   (should= '(8 10 8 8) (engine/minimax [[:_ :X :_]
                                         [:_ :_ :X]
                                         [:O :O :X]] :X :O)))

  (it "O can only win by taking center position"
   (should= '(-11 10 -11) (engine/minimax [[:O :_ :X]
                                           [:X :_ :_]
                                           [:X :O :O]] :O :X)))

  (it "an empty board will end in a draw if both players play perfectly"
   (should= '(0 0 0 0 0 0 0 0 0) (engine/minimax (board/new-board) :X :O)))))