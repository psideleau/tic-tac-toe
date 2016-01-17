(ns tic.board-spec
  (:require [speclj.core :refer :all]
             [tic.board :as board]))

(describe "the tic-tac-toe board"
  (context "a new game"
    (it "should create an empty board"
      (should= [[:empty :empty :empty]
                [:empty :empty :empty]
                [:empty :empty :empty]] (board/new-board)))))

(declare ^:dynamic piece)

(describe "the state of a new game"
  (around [it]
    (doseq [p [0 1 2 3 4 5 6 7 8]]
      (binding [piece p]
        (it))))

    (it (str "all board pieces should be free")
      (let [board (board/new-board)]
        (should (board/free? board piece)))))

(describe "check if player has won the game"
  (context "player X by going accross"
    (it (str "x should win top row")
      (let [board [[:X :X :X] [:empty :empty :empty] [:empty :empty :empty]]]
        (should (board/winner? board :X))))
    (it (str "x should win middle row")
      (let [board [[:empty :empty :empty] [:X :X :X] [:empty :empty :empty]]]
        (should (board/winner? board :X))))
    (it (str "x should win bottom row")
      (let [board [[:empty :empty :empty] [:empty :empty :empty] [:X :X :X]]]
        (should (board/winner? board :X))))

    (it (str "x should not win accross top row")
      (let [board [[:X :O :X] [:empty :empty :empty] [:empty :empty :empty]]]
        (should-not (board/winner? board :X))))
    (it (str "x should not win accross middle row")
      (let [board [[:empty :empty :empty] [:X :empty :X] [:empty :empty :empty]]]
        (should-not (board/winner? board :X))))
    (it (str "x should not win accross bottom row")
      (let [board [[:empty :empty :empty] [:empty :empty :empty] [:X :X :O]]]
        (should-not (board/winner? board :X)))))

  (context "player O by going accross"
    (it (str "O should win accross top row")
      (let [board [[:O :O :O] [:empty :empty :empty] [:empty :empty :empty]]]
        (should (board/winner? board :O))))
    (it (str "O should win accross middle row")
      (let [board [[:empty :empty :empty] [:O :O :O] [:empty :empty :empty]]]
        (should (board/winner? board :O))))
    (it (str "O should win accross bottom row")
      (let [board [[:empty :empty :empty] [:empty :empty :empty] [:O :O :O]]]
        (should (board/winner? board :O))))

    (it (str "O should not win accross top row")
      (let [board [[:O :O :X] [:empty :empty :empty] [:empty :empty :empty]]]
        (should-not (board/winner? board :O))))
    (it (str "O should not win accross middle row")
      (let [board [[:empty :empty :empty] [:O :empty :O] [:empty :empty :empty]]]
        (should-not (board/winner? board :O))))
    (it (str "O should not win accross bottom row")
      (let [board [[:empty :empty :empty] [:empty :empty :empty] [:O :X :O]]]
        (should-not (board/winner? board :O)))))


  (context "player X by winning going top-to-bottom or vice-versa"
    (it (str "x should win left col")
      (let [board [[:X :O :O]
                   [:X :empty :empty]
                   [:X :O :O]]]
        (should (board/winner? board :X))))
    (it (str "x should win middle col")
      (let [board [[:empty :X :empty]
                   [:O :X :empty]
                   [:empty :X :empty]]]
        (should (board/winner? board :X))))
    (it (str "x should win right row")
      (let [board [[:empty :empty :X]
                   [:empty :empty :X]
                   [:O :O :X]]]
        (should (board/winner? board :X)))))

  (context "player O by winning going top-to-bottom or vice-versa"
    (it (str "O should win left col")
      (let [board [[:O :X :X]
                   [:O :empty :empty]
                   [:O :X :X]]]
        (should (board/winner? board :O))))
    (it (str "O should win middle col")
      (let [board [[:empty :O :empty]
                   [:O :O :empty]
                   [:empty :O :empty]]]
        (should (board/winner? board :O))))
    (it (str "O should win right row")
      (let [board [[:empty :empty :O] [:empty :empty :O] [:X :O :O]]]
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
      (should= [[:X :empty :empty]
                [:empty :empty  :empty]
                [:empty :empty :empty]] (board/move board :X 0))))
  (it (str "should take top middle ")
    (let [board (board/new-board)]
      (should= [[:empty :X :empty]
                [:empty :empty  :empty]
                [:empty :empty :empty]] (board/move board :X 1))))
  (it (str "should take top right ")
    (let [board (board/new-board)]
      (should= [[:empty :empty :X]
                [:empty :empty :empty]
                [:empty :empty :empty]] (board/move board :X 2))))
  (it (str "should take middle left ")
    (let [board (board/new-board)]
      (should= [[:empty :empty :empty]
                [:X :empty  :empty]
                [:empty :empty :empty]] (board/move board :X 3))))
  (it (str "should take middle middle ")
    (let [board (board/new-board)]
      (should= [[:empty :empty :empty]
                [:empty :X  :empty]
                [:empty :empty :empty]] (board/move board :X 4))))
  (it (str "should take middle right ")
    (let [board (board/new-board)]
      (should= [[:empty :empty :empty]
                [:empty :empty :X]
                [:empty :empty :empty]] (board/move board :X 5))))
  (it (str "should take bottom left ")
    (let [board (board/new-board)]
      (should= [[:empty :empty :empty]
                [:empty :empty  :empty]
                [:X :empty :empty]] (board/move board :X 6))))
  (it (str "should take bottom middle ")
    (let [board (board/new-board)]
      (should= [[:empty :empty :empty]
                [:empty :empty  :empty]
                [:empty :X :empty]] (board/move board :X 7))))
  (it (str "should take bottom right ")
    (let [board (board/new-board)]
      (should= [[:empty :empty :empty]
                [:empty :empty :empty]
                [:empty :empty :X]] (board/move board :X 8))))))



