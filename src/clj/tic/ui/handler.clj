(ns tic.ui.handler
  (:require [compojure.core :refer [defroutes routes]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [hiccup.middleware :refer [wrap-base-url]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body wrap-json-params]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as response]
            [tic.ui.routes :refer [home-routes]]))

(defn init []
  (println "tic-tac-toe is starting"))

(defn destroy []
  (println "tic-tac-tie is shutting down"))

(defroutes app-routes
           (route/resources "/")
           (route/not-found "Not Found")
           )

(def app
  (-> (routes home-routes app-routes)
      (handler/site)
      (wrap-base-url)
      (wrap-json-body {:keywords? true})
      (wrap-json-response)))