(ns tic.client
  (:require
    [tic.ui.game-over :as game-over]
    [tic.client-gateway :as gateway]
    [reagent.core :as r]))

(defonce game (r/atom {}))
(def rows 3)

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
                    [:input
                        {:type "button" :class "tic-btn"
                         :name "square"
                         :value (get-square-value row id @game)
                         :on-click #(take-square row id)
                         :key (str "square-" row "-" id)
                         :id (str "square-" row "-" id)}
                     ]]) (range 3)))])

(defn board-ui []
  [:div
   [:script {:src "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.28.3/react-bootstrap.min.js"}]
   [:h1 "Tic-Tac-Toe 2"]
   [:div {:class "board"}
    (for [x (range 3)]
      ^{:key (str 'row-loop' x)}[create-row x])]
   [:a  {:href "#"  :on-click start-game :id "start-game"} "start game " ]])

(defn mountit []
  (r/render-component [board-ui]
                      (.getElementById js/document "main-area")))


