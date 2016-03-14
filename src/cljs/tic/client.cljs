(ns tic.client
  (:require
    [tic.ui.game-over :as game-over]
    [tic.client-gateway :as gateway]
    [bootstrap :as bootstrap]
    [reagent.core :as r]))

(defonce game (r/atom {}))
(def rows 3)
(def Panel (r/adapt-react-class js/ReactBootstrap.Panel))
(def Grid (r/adapt-react-class js/ReactBootstrap.Grid))
(def Row (r/adapt-react-class js/ReactBootstrap.Row))
(def Alert (r/adapt-react-class js/ReactBootstrap.Alert))
(def Col (r/adapt-react-class js/ReactBootstrap.Col))

(defn start-game-handler [response]
  (.log js/console "server responded..." (str response))
  (reset! game response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn start-game []
  (gateway/start-game start-game-handler error-handler))

(defn  won [game]
  (js/alert (str (:winner game) " has won the game")))

(defn tied [game]
  (js/alert "the game ends in a tie"))

(defn get-square-value [row col game]
  (if (:board game)
    (-> (nth (:board game) row )
         (nth col))
    "_"))

(defn take-square-handler [response]
  (.log js/console "server responded..." (str response))
  (reset! game (:game response))
  (game-over/execute-if-game-over {:tie-fn tied :win-fn won :game @game}))

(defn take-square [row col]
  (gateway/take-square {:row row
                        :col col
                        :take-square-handler take-square-handler
                        :error-handler error-handler
                        :game @game}))

(defn create-row [row]
  [:div {:class "row" :key (str "outer-row" row)}
   (doall
     (map (fn [id] [:div {:class "square" :key (str "square-class-" row "-" id)}
                    [:button
                        {:type "button" :class "tic-btn"
                         :name "square"
                         :on-click #(take-square row id)
                         :key (str "square-" row "-" id)
                         :id (str "square-" row "-" id)} (get-square-value row id @game)
                     ]]) (range 3)))])


(defn error-alert []
  [Alert {:alertVisible false}
    [:p "an unexepcted error has occurred"]])

(defn board-ui []
  [:div
   [Panel {:header "Tic-Tac-Toe" :bsStyle "primary"}
     [:div {:class "board"}
      (for [x (range 3)]
        ^{:key (str 'row-loop' x)}[create-row x])]
     [:a  {:href "#"  :on-click start-game :id "start-game"} "start game " ]]])

(defn mountit []
  (r/render-component [board-ui]
                      (.getElementById js/document "main-area")))


