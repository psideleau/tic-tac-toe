(ns tic.game-controller-spec
  (:require [speclj.core :refer :all]
            [tic.game-controller :as game-controller]
            [tic.board :as board]))

(describe "game controller"
  (it "should create an empty board when player picks X and wants to go first"
      (should= {:board [[:_ :_ :_][:_ :_ :_][:_ :_ :_]]
                :player :X
                :computer :O
                :current-turn :X
                :winner false} (game-controller/start {:player :X
                                            :player-first true})))

  (it "should create a board where computer goes first when player picks O and wants to go second"
      (let [game (game-controller/start {:player :O :player-first false})]
      (should= :O (:player game))
      (should= :X (:computer game))
      (should= :O (:current-turn game))
      (should-not (:winner game))
      (should= 8 (count (board/open-squares (:board game))))
      (should= 1 (count (board/taken-squares (:board game) (:computer game)))))))

(describe "user playing game"
  (before
    (def game (game-controller/start {:player :O :player-first true})))
   (it "should allow user to take free square and have computer go next"
      (let [game2 (game-controller/take-square game 1)]
        (should= :O (board/get-board-square (:board game2) 1))
        (should= 1 (count (board/taken-squares (:board game2) :X)))
        (should= :O (:current-turn game))))


  (it "should throw an exception if user attempts to take a square already taken"
      (let [game2 (game-controller/take-square game 1)]
        (should-throw IllegalStateException (game-controller/take-square game2 1))))

  (it "a computer should beat an inexperienced user"
      (let [player-take-edge (game-controller/take-square game 1)
            player-take-edge2 (game-controller/take-square player-take-edge 2)
            player-take-edge3 (game-controller/take-square player-take-edge2 7)]
        (should (board/winner? (:board player-take-edge3) (:computer player-take-edge3))))))


(describe "user winning or ending the game"
  (it "user wins the game"
      (let [game {:board [[:X :X :_][:O :X :O][:X :O :X]] :player :X :computer :O}
            game-ended (game-controller/take-square game 2)]
        (should= :X (board/winner (:board game-ended) )))))

