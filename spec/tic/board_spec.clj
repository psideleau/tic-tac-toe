(ns tic.board-spec
  (:require [speclj.core :refer :all]
             [tic.board :as board]))

(describe "the tic-tac-toe board"
  (context "a new game"
    (it "should create an empty board"
      (should= [[:_ :_ :_]
                [:_ :_ :_]
                [:_ :_ :_]] (board/new-board)))))

(declare ^:dynamic square)

(describe "the state of a new game"
  (around [it]
    (doseq [p [0 1 2 3 4 5 6 7 8]]
      (binding [square p]
        (it))))

    (it (str "all board squares should be free")
      (let [board (board/new-board)]
        (should (board/free? board square)))))


(describe "check if player has won the game"
  (context "player X by going accross"
    (it (str "x should win top row")
      (let [board [[:X :X :X] [:_ :_ :_] [:_ :_ :_]]]
        (should (board/winner? board :X))
        (should= [0 1 2] (board/taken-squares board :X))))
    (it (str "x should win middle row")
      (let [board [[:_ :_ :_] [:X :X :X] [:_ :_ :_]]]
        (should (board/winner? board :X))))
    (it (str "x should win bottom row")
      (let [board [[:_ :_ :_] [:_ :_ :_] [:X :X :X]]]
        (should (board/winner? board :X))))

    (it (str "x should not win accross top row")
      (let [board [[:X :O :X] [:_ :_ :_] [:_ :_ :_]]]
        (should-not (board/winner? board :X))))
    (it (str "x should not win accross middle row")
      (let [board [[:_ :_ :_] [:X :_ :X] [:_ :_ :_]]]
        (should-not (board/winner? board :X))))
    (it (str "x should not win accross bottom row")
      (let [board [[:_ :_ :_] [:_ :_ :_] [:X :X :O]]]
        (should-not (board/winner? board :X)))))

  (context "player O by going accross"
    (it (str "O should win accross top row")
      (let [board [[:O :O :O] [:_ :_ :_] [:_ :_ :_]]]
        (should (board/winner? board :O))))
    (it (str "O should win accross middle row")
      (let [board [[:_ :_ :_] [:O :O :O] [:_ :_ :_]]]
        (should (board/winner? board :O))))
    (it (str "O should win accross bottom row")
      (let [board [[:_ :_ :_] [:_ :_ :_] [:O :O :O]]]
        (should (board/winner? board :O))))

    (it (str "O should not win accross top row")
      (let [board [[:O :O :X] [:_ :_ :_] [:_ :_ :_]]]
        (should-not (board/winner? board :O))))
    (it (str "O should not win accross middle row")
      (let [board [[:_ :_ :_] [:O :_ :O] [:_ :_ :_]]]
        (should-not (board/winner? board :O))))
    (it (str "O should not win accross bottom row")
      (let [board [[:_ :_ :_] [:_ :_ :_] [:O :X :O]]]
        (should-not (board/winner? board :O)))))


  (context "player X by winning going top-to-bottom or vice-versa"
    (it (str "x should win left col")
      (let [board [[:X :O :O]
                   [:X :_ :_]
                   [:X :O :O]]]
        (should (board/winner? board :X))))
    (it (str "x should win middle col")
      (let [board [[:_ :X :_]
                   [:O :X :_]
                   [:_ :X :_]]]
        (should (board/winner? board :X))))
    (it (str "x should win right row")
      (let [board [[:_ :_ :X]
                   [:_ :_ :X]
                   [:O :O :X]]]
        (should (board/winner? board :X)))))

  (context "player O by winning going top-to-bottom or vice-versa"
    (it (str "O should win left col")
      (let [board [[:O :X :X]
                   [:O :_ :_]
                   [:O :X :X]]]
        (should (board/winner? board :O))))
    (it (str "O should win middle col")
      (let [board [[:_ :O :_]
                   [:O :O :_]
                   [:_ :O :_]]]
        (should (board/winner? board :O))))
    (it (str "O should win right row")
      (let [board [[:_ :_ :O] [:_ :_ :O] [:X :O :O]]]
        (should (board/winner? board :O)))))


  (context "player X by winning by going diagonal"
    (it (str "x should win left-to-right-down")
      (let [board [[:X :O :O]
                   [:O :X :O]
                   [:O :O :X]]]
        (should (board/winner? board :X))))
    (it (str "x should win left-to-right-up")
      (let [board [[:O :X :X]
                   [:O :X :O]
                   [:X :O :O]]]
        (should (board/winner? board :X)))))

  (context "should take a spot"
    (it (str "should take top left ")
      (let [board (board/new-board)]
        (should= [[:X :_ :_]
                  [:_ :_  :_]
                  [:_ :_ :_]] (board/take-square board :X 0))))
    (it (str "should take top middle ")
      (let [board (board/new-board)]
        (should= [[:_ :X :_]
                  [:_ :_  :_]
                  [:_ :_ :_]] (board/take-square board :X 1))))
    (it (str "should take top right ")
      (let [board (board/new-board)]
        (should= [[:_ :_ :X]
                  [:_ :_ :_]
                  [:_ :_ :_]] (board/take-square board :X 2))))
    (it (str "should take middle left ")
      (let [board (board/new-board)]
        (should= [[:_ :_ :_]
                  [:X :_  :_]
                  [:_ :_ :_]] (board/take-square board :X 3))))
    (it (str "should take middle middle ")
      (let [board (board/new-board)]
        (should= [[:_ :_ :_]
                  [:_ :X  :_]
                  [:_ :_ :_]] (board/take-square board :X 4))))
    (it (str "should take middle right ")
      (let [board (board/new-board)]
        (should= [[:_ :_ :_]
                  [:_ :_ :X]
                  [:_ :_ :_]] (board/take-square board :X 5))))
    (it (str "should take bottom left ")
      (let [board (board/new-board)]
        (should= [[:_ :_ :_]
                  [:_ :_  :_]
                  [:X :_ :_]] (board/take-square board :X 6))))
    (it (str "should take bottom middle ")
      (let [board (board/new-board)]
        (should= [[:_ :_ :_]
                  [:_ :_  :_]
                  [:_ :X :_]] (board/take-square board :X 7))))
    (it (str "should take bottom right ")
      (let [board (board/new-board)]
        (should= [[:_ :_ :_]
                  [:_ :_ :_]
                  [:_ :_ :X]] (board/take-square board :X 8)))))

  (context "two perfect players will end the game in a draw"
    (it "should be a tie"
      (should  (board/tie? [ [:X :X :O]
                             [:O :O :X]
                             [:X :O :O]] :X :O)))
    (it "should not be a tie"
      (should-not  (board/tie? [[:X :X :_]
                            [:O :O :X]
                            [:X :O :O]] :X :O))))

  (context "the state of a board"
    (it "all positions should be free"
     (should= [0 1 2 3 4 5 6 7 8] (board/open-squares (board/new-board))))

    (it "open poistion should be free"
      (should= [1 3 8] (board/open-squares [[:X :_ :O]
                                            [:_ :O :X]
                                            [:O :X :_]])))))



