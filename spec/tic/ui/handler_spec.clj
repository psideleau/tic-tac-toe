(ns tic.ui.handler-spec
  (:require [speclj.core :refer :all]
            [ring.util.codec :as codec]
            [ring.mock.request :refer :all]
            [tic.ui.handler :refer :all]))

(defn get-request [url]
  (app (request :get url)))

(defn should-draw-tic-tac-toe-board [body]
  (should= 3 (count (re-seq #"class=\"row\"" body)))
  (should= 9 (count (re-seq #"class=\"square\"" body))))
(describe "Testing the web app"
  (it "GET '/' should say tic tac toe"
      (let [response (get-request "/")
            body (:body response)]
        (should-draw-tic-tac-toe-board body)
        (should= 200 (:status response))))

  (it "GET '/invalid' should say Not Found"
      (let [response (get-request  "/invalid")]
        (should= 404 (:status response)))))

(run-specs)