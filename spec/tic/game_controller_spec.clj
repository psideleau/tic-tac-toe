(ns tic.game-controller-spec
  (:require [speclj.core :refer :all]
            [tic.game-controller :as game-controller]
            [tic.game-state :as game-state]
            [tic.board :as board]))

(def game-spy-data (atom {}))
(deftype SpyGameListener []
  game-controller/GameListener
  (update-board! [this game] (swap! game-spy-data assoc :update-board-called true :game game))
  (winner [this game] (swap! game-spy-data assoc :winner-called true :game game))
  (tied [this game]  (swap! game-spy-data assoc :tied-called true :game game)))


(describe "starting a new game"
  (before
    (def game-state (game-state/memory-game-state)))


  (it "should create an empty board when player picks X and wants to go first"
      (let [expected-game {:board    [[:_ :_ :_] [:_ :_ :_] [:_ :_ :_]]
                           :player   :X
                           :computer :O}]
        (should= expected-game (game-controller/start! {:player       :X
                                                        :player-first true
                                                        :game-state   game-state}))
        (should= expected-game (.game game-state))))

  (it "should create a board where computer goes first when player picks O and wants to go second"
      (game-controller/start! {:player :O :player-first false :game-state game-state})
      (let [game (.game game-state)]
        (should= :O (:player game))
        (should= :X (:computer game))
        (should= :O (:current-turn game))
        (should-not (:winner game))
        (should= 8 (count (board/open-squares (:board game))))
        (should= 1 (count (board/taken-squares (:board game) (:computer game)))))))

(describe "user playing game"
    (before
      (reset! game-spy-data {})
      (def spy-game-listener (SpyGameListener.))
      (def game-state (game-state/memory-game-state))
      (game-controller/start! {:player :O :player-first true :game-state game-state}))

    (it "should allow user to take free square and have computer go next"
        (game-controller/take-square! game-state 1 spy-game-listener)
        (should= :O (board/get-board-square (:board (.game game-state)) 1))
        (should= 1 (count (board/taken-squares (:board (.game game-state)) :X)))
        (should= :O (:current-turn (.game game-state)))
        (should (:update-board-called @game-spy-data))
        (should-not (:tie (.game game-state)))
        (should-not (:winner (.game game-state)))
        (should-not (:loser (.game game-state)))
        (should-not (:game-over (.game game-state)))
        (should-not (:winner-called @game-spy-data))
        (should-not (:tied-called @game-spy-data)))

    (it "should throw an exception if user attempts to take a square already taken"
        (game-controller/take-square! game-state 1 spy-game-listener)
        (should-throw IllegalStateException (game-controller/take-square! game-state 1 spy-game-listener)))

    (it "a computer should beat an inexperienced user"
        (game-controller/take-square! game-state 1 spy-game-listener)
        (game-controller/take-square! game-state 2 spy-game-listener)
        (game-controller/take-square! game-state 7 spy-game-listener)
        (should (board/winner? (:board (.game game-state) (:computer (.game game-state)))))
        (should= :X (board/winner (:board (.game game-state))))
        (should= :X (:winner (.game game-state)))
        (should (:game-over (.game game-state)))
        (should= :O (:loser (.game game-state)))
        (should-not (:tie (.game game-state)))
        (should (:winner-called @game-spy-data))))

(describe "user winning the game"
  (before
    (reset! game-spy-data {})
    (def spy-game-listener (SpyGameListener.))
    (def game-state (game-state/memory-game-state)))
  (it "user wins the game"
      (let [game {:board [[:X :X :_] [:O :X :O] [:X :O :X]] :player :X :computer :O}]
        (.set-game! game-state game)
        (game-controller/take-square! game-state 2 spy-game-listener)
        (should= :X (board/winner (:board (.game game-state))))
        (should= :X (:winner (.game game-state)))
        (should= :O (:loser (.game game-state)))
        (should (:game-over (.game game-state)))
        (should-not (:tie (.game game-state)))
        (should (:winner-called @game-spy-data)))))

(describe "user tying the game"
  (before
    (reset! game-spy-data {})
    (def spy-game-listener (SpyGameListener.))
    (def game-state (game-state/memory-game-state)))
  (it "user ties the game"
      (let [game {:board [[:O :O :_]
                          [:X :X :O]
                          [:O :O :X]] :player :X :computer :O}]
        (.set-game! game-state game)
        (game-controller/take-square! game-state 2 spy-game-listener)
        (should (:tie (.game game-state)))
        (should-not (:winner (.game game-state)))
        (should-not (:loser (.game game-state)))
        (should (:game-over (.game game-state)))
        (should (:tied-called @game-spy-data)))))