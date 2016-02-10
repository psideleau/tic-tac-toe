(ns tic.ui.layout
  (:require [hiccup.page :refer [html5 include-css]]))

(defn common [& body]
  (html5
    [:head
     [:title "Tic-tac-toe"]
     (include-css "/css/screen.css")]
    [:body body]))
