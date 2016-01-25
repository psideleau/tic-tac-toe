(ns tic.ai-engine-spec
  (:require [speclj.core :refer :all]
            [tic.board :as board]
            [tic.ai-engine :as engine]))

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
        board-after-selection (engine/select-square {:board (board/new-board) :computer :X :player :0} stub-select-center-fn)]
        (should  (every? #(board/free? board-after-selection %) edge-squares))
        (should= first-choice-squares @spy-eligible-first-choice-squares)
        (should-not (board/free? board-after-selection center-square)))))

(describe "computer wins the game"
  (it "should win game"
    (let [board (engine/select-square {:board   [[:O :_ :X]
                                                 [:X :_ :_]
                                                 [:X :O :O]]
                                       :computer :O :player :X} rand-nth)]
    (should= [[:O :_ :X]
              [:X :O :_]
              [:X :O :O]] board)
    (should (board/winner? board :O)))))


(describe "the possible moves of a board"
  (context "get minimax scores"
    (it "should get minimax values of each state"
      (should= '(10) (engine/minimax [[:X :X :O]
                                      [:O :O :X]
                                      [:X :X :_]] :X :O)))
    (it "should get minimax values of each state"
      (should= '(0) (engine/minimax [[:X :X :O]
                                     [:O :O :_]
                                     [:X :X :O]] :X :O)))
    (it "should get minimax values of each state"
      (should= '(10) (engine/minimax [[:X :X :O]
                                      [:O :O :_]
                                      [:X :X :O]] :O :X)))
    (it "should get minimax values of each state"
      (should= '(-10 10 -10) (engine/minimax [[:O :_ :X]
                                              [:X :_ :_]
                                              [:X :O :O]] :X :O)))

    (it "should get minimax values of each state"
      (should= '(10 10 10 10) (engine/minimax [[:_ :X :_]
                                              [:_ :_ :X]
                                              [:O :O :X]] :X :O)))

    (it "should get minimax values of each state"
      (should= '(-10 10 -10) (engine/minimax [  [:O :_ :X]
                                              [:X :_ :_]
                                              [:X :O :O]] :O :X)))

    (it "an empty board will end in a draw if both players play perfectly"
      (println "end test")
      (should= '(0 0 0 0 0 0 0 0 0) (engine/minimax (board/new-board) :X :O)))))
