(ns tic.client-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [tic.reagent :as r]
            [sinon :as s]))

(defn stub-board-as-str []
  "[[\"_\", \"_\",\"_\"],
   [\"_\", \"_\",\"_\"],
   [\"_\", \"_\",\"_\"]]"
  )

(let [server  (atom {})
      winner-callback (atom {})
      tied-callback (atom {})
      ]
  (use-fixtures :each
      {:before (fn []
                 (do
                 (reset! winner-callback {})
                 (reset! tied-callback {})
                 (reset! server (.create s/fakeServer))
                 (.respondWith @server "POST" "/tic-tac-toe" (str
                                           "{\"player\" : \"X\",
                                            \"computer\" : \"O\",
                                            \"board\" :" (stub-board-as-str) "}"))))
       :after  (fn [] (.restore @server))})

  (deftest test-start-game []
    (r/start-game)

    (.respond @server)

    (is (= "X" (:player @r/game)))
    (is (= "O" (:computer @r/game)))
    (is (= false (nil? (:board @r/game)))))

  (deftest test-player-wins-game []
   (.respondWith @server "POST" "/squares/2"
                 (str "{\"game\" : {
                     \"player\" : \"X\",
                     \"computer\" : \"O\",
                     \"game-over\" : true,
                     \"winner\" : \"X\",
                  \"board\" : " (stub-board-as-str) "}}"))

   (with-redefs [r/won (fn[game] (reset! winner-callback game))]
      (r/take-square 0 2)
      (.respond @server)
      (is (= true (:game-over @winner-callback)))))


 (deftest test-player-tieds-game []
  (.respondWith @server "POST" "/squares/2"
               (str "{\"game\" : {
                      \"player\" : \"X\",
                      \"computer\" : \"O\",
                      \"game-over\" : true,
                      \"tie\" : true,
                      \"board\" : " (stub-board-as-str) "}}"))
  (with-redefs [r/tied (fn[game] (reset! tied-callback game))]
    (r/take-square 0 2)
    (.respond @server)
    (is (= true (:game-over @tied-callback)))))

  (deftest test-player-takes-square []
    (.respondWith @server "POST" "/squares/2"
                (str "{\"game\" : {
                      \"player\" : \"X\",
                      \"computer\" : \"O\",
                      \"board\" : " (stub-board-as-str) "}}"))
    (with-redefs [r/tied (fn[game] (reset! tied-callback game))
                  r/won (fn[game] (reset! winner-callback game))]
      (r/take-square 0 2)
      (.respond @server)
      (is (= false (true? (:game-over @tied-callback))))
      (is (= false (true? (:game-over @winner-callback)))))))