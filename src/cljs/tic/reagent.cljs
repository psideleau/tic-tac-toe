(ns tic.reagent
  (:require
    [ajax.core :refer [GET POST]]
    [reagent.core :as r]))

(defonce game (r/atom {}))

(defn start-game-handler [response]
  (.log js/console "server responded..." (str response))
  (reset! game response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn start-game []
  (POST "/tic-tac-toe"
        {:handler start-game-handler
         :error-handler error-handler
         :format :json
         :keywords? true
         :response-format :json}))

(defn ^:export won []
  (js/alert (str (:winner @game) " has won the game")))

(defn ^:export tied []
  (js/alert "the game ends in a tie"))

(defn get-square-value [row col game]
  (if (:board game)
    (-> (nth (:board game) row )
         (nth col))
    "_"))

(defn take-square-handler [response]
  (.log js/console "server responded..." (str response))
  (reset! game (:game response))
  (if (:callback-method response)
    (let [callback-fn (aget js/window "tic" "reagent" (:callback-method response))]
      (callback-fn))))

(defn take-square [row col]
  (let [square (+ (* row 3) col)]
    (.log js/console (str "square" square))
    (POST (str "/squares/" square)
          {:handler take-square-handler
           :error-handler error-handler
           :params {:game @game, :callback-methods{:winner-method "won" :tied-method "tied"}}
           :format :json
           :keywords? true
           :response-format :json})))

(defn create-row [row]
  [:div {:class "row"}
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
   [:h1 "Tic-Tac-Toe"]
   [:div {:class "board"}
    [create-row 0]
    [create-row 1]
    [create-row 2]
    ]
   [:a  {:href "#"  :on-click start-game :id "start-game"} "start game" ]])

(defn mountit []
  (r/render-component [board-ui]
                      (.getElementById js/document "main-area")))

(defn ^:export run []
  (mountit))

(run)

