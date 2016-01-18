(ns tic.ai-engine-spec
  (:require [speclj.core :refer :all]
            [tic.board :as board]
            [tic.ai-engine :as engine]))

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
