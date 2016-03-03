(ns tic.game-controller-spec
  (:require [speclj.core :refer :all]
            [tic.game-controller :as game-controller]
            [tic.board :as board]))

(def game-spy-data (atom {}))

(describe "starting a new game" 
  (it "should create an empty board when player picks X and wants to go first"
      (let [expected-game {:board    [[:_ :_ :_] [:_ :_ :_] [:_ :_ :_]]
                           :player   :X
                           :computer :O}]
        (should= expected-game (game-controller/start {:player        :X
                                                        :player-first true}))))

  (it "should create a board where computer goes first when player picks O and wants to go second"
      (let [game (game-controller/start {:player :O :player-first false })]
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
        (let [updated-game (game-controller/take-square game 1)]
          (println "THE BOARD IS " (:board updated-game))
          (should= :O (board/get-board-square (:board updated-game ) 1))
          (should= 1 (count (board/taken-squares (:board updated-game ) :X)))
          (should= :O (:current-turn updated-game))
          (should-not (:tie updated-game))
          (should-not (:winner updated-game))
          (should-not (:loser updated-game))
          (should-not (:game-over updated-game))
          (should-not (:winner-called updated-game))
          (should-not (:tied-called updated-game))))

    (it "should throw an exception if user attempts to take a square already taken"
        (let [updated-game (game-controller/take-square game 1)]
        (should-throw IllegalStateException (game-controller/take-square updated-game 1))))

    (it "a computer should beat an inexperienced user"
        (let [state1 (game-controller/take-square game 1)
              state2 (game-controller/take-square state1 2)
              end-game (game-controller/take-square state2 7)]
        (should (board/winner? (:board end-game) (:computer end-game)))
        (should= :X (board/winner (:board end-game)))
        (should= :X (:winner end-game))
        (should (:game-over  end-game))
        (should= :O (:loser  end-game))
        (should-not (:tie    end-game)))))

(describe "user winning the game"
  (it "user wins the game"
      (let [fake-game {:board [[:X :X :_] [:O :X :O] [:X :O :X]] :player :X :computer :O}
            game  (game-controller/take-square fake-game 2)]
        (should= :X (board/winner (:board game)))
        (should= :X (:winner game))
        (should= :O (:loser game))
        (should (:game-over game))
        (should-not (:tie game)))))

(describe "user tying the game"
  (it "user ties the game"
      (let [fake-game {:board [[:O :O :_]
                          [:X :X :O]
                          [:O :O :X]] :player :X :computer :O}
            game  (game-controller/take-square fake-game 2)]
        
        (should (:tie game))
        (should-not (:winner game))
        (should-not (:loser game))
        (should (:game-over game)))))