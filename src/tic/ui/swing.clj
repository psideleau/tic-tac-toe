(ns tic.ui.swing
  (:require [tic.game-controller :as tic.game-controller]
            [tic.ui.swing-controller :as swing-controller])
  (:import [javax.swing SwingUtilities JFrame JLabel JPanel JButton JOptionPane]
           [java.awt GridLayout BorderLayout]
           [java.awt.event ActionListener]
           [tic.ui.swing_controller GameListener]
          ))


(extend JButton
  swing-controller/SquareWidget
  {:square-index (fn [this] (Integer/parseInt (.getActionCommand this)))
   :current-state (fn [this] (.getText this))
   :set-taken-by! (fn [this player] (.setText this player))
   :set-disabled! (fn [this disabled] (.setEnabled this (not disabled)))
   :disabled? (fn [this] (= false (.isEnabled this)))
   })


(defn action-listener [game-listener]
  (proxy [ActionListener] []
    (actionPerformed [event]
      (do

        (swing-controller/take-square! (.getSource event) game-listener)
      ))))

(defn show-msg [jframe msg]
  (JOptionPane/showMessageDialog jframe, msg))

(defn game-listener [jframe]
  (reify
    GameListener
    (lost-game [this] (show-msg jframe "You Have Lost The Game"))
    (won-game  [this] (show-msg jframe "You Have Won The Game"))
    (tied-game [this] (show-msg jframe "You Have Tied The Game"))))


(defn add-square-buttons! [jpanel game-listener]
  (let [action-listener (action-listener game-listener)]
    (dotimes [n tic.board/total-squares]
      (let [button (JButton. "_")]
        (.setActionCommand button (str n))
        (.addActionListener button action-listener)
        (.add jpanel button)
        (swap! swing-controller/state assoc :ui-squares (into (:ui-squares @swing-controller/state) [button]))))))

(defn show-gui []
  (let [frame (JFrame. "HelloWorldString")
        label (JLabel. "Hello World")
        game-panel (JPanel. (GridLayout. 3 3))
        contentPane (.getContentPane frame)
        game-listener (game-listener  frame)]
    (doto frame
      (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE)
      (.setLayout (BorderLayout.)))

    (doto contentPane
      (.add label BorderLayout/PAGE_START)
      (.add game-panel BorderLayout/CENTER))

    (add-square-buttons! game-panel game-listener)
    (swing-controller/init! (:ui-squares @swing-controller/state))

    (doto frame
      (.pack)
      (.setVisible true))))

(defn launch-app []
  (SwingUtilities/invokeLater show-gui))