(ns tic.ui.layout
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn common [& body]
  (html5
    [:head
     [:title "Tic-tac-toe"]
     (include-css "/css/screen.css")
     (include-js "/js/app.js")]
    [:body {:id "body"} body]))
