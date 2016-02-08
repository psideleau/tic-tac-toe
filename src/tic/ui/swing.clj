(ns tic.ui.swing
  (:require [tic.game-controller :as game-controller]
            [tic.ui.swing-controller :as swing-controller])
  (:import [javax.swing SwingUtilities JFrame JLabel JPanel JButton JOptionPane]
           [java.awt GridLayout BorderLayout]
           [java.awt.event ActionListener]
           [tic.game_controller GameListener]
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
        (swing-controller/take-square! (.getSource event) game-listener)))))

(defn show-msg [jframe msg]
  (JOptionPane/showMessageDialog jframe, msg))

(defn game-listener [jframe ui-squares]
  (reify
    game-controller/GameListener
    (update-board! [this game] (swing-controller/update-board-ui! ui-squares game))
    (winner  [this game] (do (println game) (show-msg jframe (str (:winner game) " has won The Game"))))
    (tied [this game] (show-msg jframe "The game has ended in a tie"))))


(defn set-action-listener-for-buttons! [ui-squares game-listener]
  (let [action-listener (action-listener game-listener)]
    (doseq [square ui-squares]
        (.addActionListener square action-listener))))

(defn create-buttons-for! [jpanel]
  (let [button-factory
        (fn[idx]
          (let [button (JButton. "_")]
            (.setActionCommand button (str idx))
            (.add jpanel button)))]
    (map button-factory (range tic.board/total-squares))))

(defn show-gui []
  (let [frame (JFrame. "Tic Tac Toe")
        game-panel (JPanel. (GridLayout. 3 3))
        contentPane (.getContentPane frame)
        ui-squares (create-buttons-for! game-panel)
        game-listener (game-listener  frame ui-squares)]
    (doto frame
      (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE)
      (.setLayout (BorderLayout.)))

    (doto contentPane
      (.add game-panel BorderLayout/CENTER))

    (set-action-listener-for-buttons! ui-squares game-listener)
    (swing-controller/init! ui-squares)

    (doto frame
      (.pack)
      (.setVisible true))))

(defn -main []
  (SwingUtilities/invokeLater show-gui))