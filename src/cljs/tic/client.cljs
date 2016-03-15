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
  (swap! game merge {:error status-text} @game)
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn start-game []
  (gateway/start-game start-game-handler error-handler))

(defn  won [game-obj]
  (swap! game merge {:game-over-msg (str (:winner game-obj) " has won the game")} @game))

(defn tied [game-obj]
  (swap! game merge {:game-over-msg "The game end in a ties"} @game))

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
  (r/create-class                 ;; <-- expects a map of functions
    {
     :get-initial-state (fn[this] {:alert-visible true })

     :component-did-mount               ;; the name of a lifecycle function
                    #(.log js/console "component-did-mount")   ;; your implementation

     :component-will-mount              ;; the name of a lifecycle function
                    #(.log js/console "component-will-mount")  ;; your implementation

     ;; other lifecycle funcs can go in here

     :display-name  "my-component"  ;; for more helpful warnings & errors

     :render        ;; Note:  is not :render
                    (fn [this]           ;; remember to repeat parameters
                      (if (:error @game)
                        [Alert {:bsStyle "danger"}
                         [:p "an unexpected error has occurred"]
                         [:button {:on-click #(swap! game dissoc :error)} "Close"]]
                        ))}))


(defn game-over-alert []
  (r/create-class                 ;; <-- expects a map of functions
    {
     :get-initial-state (fn[this] {:alert-visible true })

     :component-did-mount               ;; the name of a lifecycle function
                        #(.log js/console "component-did-mount")   ;; your implementation

     :component-will-mount              ;; the name of a lifecycle function
                        #(.log js/console "component-will-mount")  ;; your implementation

     ;; other lifecycle funcs can go in here

     :display-name  "my-component"  ;; for more helpful warnings & errors

     :render        ;; Note:  is not :render
                        (fn [this]           ;; remember to repeat parameters
                          (if (:game-over @game)
                            [Alert {:bsStyle "info"}
                             [:p (:game-over-msg @game)]
                             [:button {:on-click #(swap! game dissoc :game-over-msg :game-over)} "Close"]]
                            ))}))


(defn board-ui []
  [:div
   [Panel {:header "Tic-Tac-Toe" :bsStyle "info"}
     [error-alert]
     [game-over-alert]
     [:div {:class "board"}
      (for [x (range 3)]
        ^{:key (str 'row-loop' x)}[create-row x])]
     [:a  {:href "#"  :on-click start-game :id "start-game"} "start game " ]]])

(defn mountit []
  (r/render-component [board-ui]
                      (.getElementById js/document "main-area")))


