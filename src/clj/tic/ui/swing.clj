(ns tic.ui.swing
  (:require [tic.ui.swing-controller :as swing-controller]
            [tic.ui.console-ui :as console-ui]
            [tic.ui.game-over :as game-over])
  (:import [javax.swing SwingUtilities JFrame JPanel JButton JOptionPane]
           [java.awt GridLayout BorderLayout]
           [java.awt.event ActionListener]
          ))

(extend JButton
  swing-controller/SquareWidget
  {:square-index (fn [this] (Integer/parseInt (.getActionCommand this)))
   :current-state (fn [this] (.getText this))
   :set-taken-by! (fn [this player] (.setText this player))
   :set-disabled! (fn [this disabled] (.setEnabled this (not disabled)))
   :disabled? (fn [this] (= false (.isEnabled this)))
   })

(defn show-msg [jframe msg]
  (JOptionPane/showMessageDialog jframe, msg))

(defn action-listener [ui-squares jframe]
  (proxy [ActionListener] []
    (actionPerformed [event]
         (swing-controller/take-square! (.getSource event) ui-squares)
        (game-over/execute-if-game-over {:win-fn #(show-msg jframe (str (:winner %) " has won The Game"))
                                          :tie-fn (fn[game] (show-msg jframe "The game has ended in a tie"))
                                          :game @swing-controller/state}))))




(defn set-action-listener-for-buttons! [ui-squares jframe]
  (let [action-listener (action-listener ui-squares jframe)]
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
        ui-squares (create-buttons-for! game-panel)]
    (doto frame
      (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE)
      (.setLayout (BorderLayout.)))

    (doto contentPane
      (.add game-panel BorderLayout/CENTER))

    (set-action-listener-for-buttons! ui-squares frame)
    (swing-controller/init! ui-squares)

    (doto frame
      (.pack)
      (.setVisible true))))

(defn -main []
  (println "Enter 1 for Swing 2 for Console")
  (flush)
  (case (Integer/parseInt (read-line))
    1  (SwingUtilities/invokeLater show-gui)
    2   (console-ui/play-game)))