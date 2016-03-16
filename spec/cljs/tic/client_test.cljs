(ns tic.client-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [reagent.core :as reagent]
            [tic.client :as r]
            [sinon :as s]))

(defn stub-board-as-str []
  "[[\"_\", \"_\",\"X\"],
   [\"_\", \"_\",\"_\"],
   [\"_\", \"_\",\"_\"]]"
  )

(let [server  (atom {})
      div (atom {})
      winner-callback (atom {})
      tied-callback (atom {})
      ]
  (use-fixtures :each
      {:before (fn []
                   (reset! div (.createElement js/document "div"))
                   (set! (.-id @div) "test-area")
                   (.appendChild (.-body js/document) @div)
                   (reset! winner-callback {})
                   (reset! tied-callback {})
                   (reset! server (.create s/fakeServer))
                   (reset!  r/game {})
                   (.respondWith @server "POST" "/tic-tac-toe" (str
                                             "{\"player\" : \"X\",
                                              \"computer\" : \"O\",
                                              \"board\" :" (stub-board-as-str) "}")))
       :after  (fn []
                 (.removeChild (.-body js/document) @div)
                 (.restore @server))})

  (defn render [component]
    (reagent/render-component component (.getElementById js/document "test-area")))

  (deftest test-displaying-a-board []
    (render [r/create-row 1])
    (is (= 3  (.-length  (.querySelectorAll js/document ".tic-btn")))))

  (deftest test-should-display-game-over-result []
    (swap! r/game assoc :game-over true )
    (render [r/game-over-alert])
    (is (not (nil?  (.querySelector js/document "#game-over-alert")))))

  (defn click-button [id]
    (.click  (.querySelector js/document id)))

  (deftest test-close-game-over-alert []
    (swap! r/game assoc :game-over true )
    (render [r/game-over-alert])
    (click-button  "#game-over-close-btn")
    (is (nil?  (:game-over @r/game))))

  (deftest test-should-not-display-game-over-result []
    (swap! r/game assoc :game-over false )
    (render [r/game-over-alert])
    (is  (nil?  (.querySelector js/document "#game-over-alert"))))

  (deftest test-should-display-error-alert []
    (swap! r/game assoc :error true :error-msg "error")
    (render [r/error-alert])
    (is  (not (nil?  (.querySelector js/document "#error-alert")))))

  (deftest test-should-close-error-alert []
     (swap! r/game assoc :error true :error-msg "error")
     (render [r/error-alert])
     (click-button "#error-alert-close-btn")
     (is (nil?  (:error @r/game)))
     (is (nil?  (:error-msg @r/game))))

  (deftest test-should-not-display-error-alert []
    (swap! r/game dissoc :error)
    (render [r/error-alert])
    (is  (nil?  (.querySelector js/document "#error-alert"))))


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
      (is (true? (:game-over @winner-callback)))))


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
      (is (true? (:game-over @tied-callback)))))

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
      (is (nil?  (:game-over @tied-callback)))
      (is (nil? (:game-over @winner-callback))))))