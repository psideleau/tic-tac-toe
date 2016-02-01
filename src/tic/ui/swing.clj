(ns tic.ui.swing
  (:require [tic.game-controller :as tic.game-controller]
            [tic.ui.swing.swing-controller :as swing-controller])
  (:import [javax.swing SwingUtilities JFrame JLabel JPanel JButton]
           [java.awt GridLayout BorderLayout]
           [java.awt.event ActionListener]
           [tic.ui.swing_controller SquareWidget GameListener]))

(extend JButton
  SquareWidget
  {:square-index (fn [this] (Integer/parseInt (.getActionCommand this)))
   :current-state (fn [this] (.getText this))
   :set-taken-by! (fn [this player] (.setText this player))
   :set-disabled! (fn [this disabled] (.setEnabled this (not disabled)))
   :disabled? (fn [this] (= false (.isEnabled this)))
   })


(declare swing-controller)

(defn action-controller []
  (proxy [ActionListener] []
    (actionPerformed [event]
      (println "hello world" (square (.getSource event)))
      (println (square (nth (@swing-controller :squares)  (square (.getSource event)))))
      (flush)
      )))

(defn button [square-id]
  (proxy [JButton] [square-id]))

(def swing-controller
  (atom {
         :board []
         :squares []
         :action-listener (action-controller)}))

(defn add-square-buttons! [jpanel]
  (dotimes [n 9]
    (let [button (JButton. "_")]
      (.setActionCommand button (str n))
      (.addActionListener button (:action-listener @swing-controller))
      (.add jpanel button)
      (swap! swing-controller assoc :squares (into (:squares @swing-controller) [button])))))

(defn show-gui []
  (let [frame (JFrame. "HelloWorldString")
        label (JLabel. "Hello World")
        game-panel (JPanel. (GridLayout. 3 3))
        contentPane (.getContentPane frame)]
    (doto frame
      (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE)
      (.setLayout (BorderLayout.)))

    (doto contentPane
      (.add label BorderLayout/PAGE_START)
      (.add game-panel BorderLayout/CENTER))

    (add-square-buttons! game-panel)

    (doto frame
      (.pack)
      (.setVisible true))))


(defn launch-app []
  (let [gui (proxy [Object Runnable] [] (run [] (show-gui)))]
    (SwingUtilities/invokeLater show-gui)))