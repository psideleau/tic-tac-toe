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

  (it "should create an empty board when player picks O and wants to go second"
      (should= {:board [[:_ :_ :_][:_ :_ :_][:_ :_ :_]]
                :player :O
                :computer :X
                :current-turn :X
                :winner false} (game-controller/start {:player :O
                                            :player-first false}))))

(describe "user playing game"
  (before
    (def game (game-controller/start {:player :O :player-first true})))
  (it "should allow user to take free square and have computer go next"
      (let [game2 (game-controller/take-square game 1)]
        (println (:board game2))
        (println "hello world")
        (should= :O (board/get-board-square (:board game2) 1))
        (should= 1 (count (board/taken-squares (:board game2) :X))))))