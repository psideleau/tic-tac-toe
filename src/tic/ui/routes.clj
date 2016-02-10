(ns tic.ui.routes
  (:require [compojure.core :refer [GET POST defroutes]]
            [ring.util.response :as response]
            [tic.ui.layout :as layout]
            [hiccup.form :as form]
            [hiccup.util :as util]
            [hiccup.element :as elm]))

(defn create-row [offset]
  [:div {:class "row"}
    (map (fn [id] [:div {:class "square"}
             [:input {:type "button" :name "square" :value (str (+ offset id))}]]) (range 3))])

(defn home []
  (layout/common [:h1 "Tic-Tac-Toe"]
                 [:div {:class "board"}
                  (create-row 0)
                  (create-row 3)
                  (create-row 6)
                 ]
                 (  elm/link-to "/start" "Start a game")))

(defn new-user []
  (layout/common
    [:h1 "New User"]
    (form/form-to [:post "/users"]
                  (form/label "name" "Enter name")
                  (form/text-field "name")
                  (form/submit-button "Submit"))))

(defn create-user! [req]
  (response/redirect (str "/users/1?name=" (get (:params req) :name))))

(defn get-user [req]
  (layout/common [:h1 (str "User: " (util/escape-html (get (:params req) :name)))]))

(defroutes home-routes
           (GET "/" [] (home))
           (GET "/users/new" req (new-user))
           (GET "/users/:id" req (get-user req))
           (POST "/users"    req (create-user! req)))
