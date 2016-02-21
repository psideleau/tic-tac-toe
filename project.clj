(defproject tic "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.4.0"]
                 [hiccup "1.0.5"]
                 [ring-server "0.4.0"]
                 [ring/ring-json "0.4.0"]]
  :ring {:handler tic.ui.handler/app
         :init tic.ui.handler/init
         :destroy tic.ui.handler/destroy}
  :profiles {
   :uberjar {:aot :all}
    :production
       {:ring
        {:open-browser? false, :stacktraces? false, :auto-reload? false}}
   :dev {:dependencies [[speclj "3.3.1"]
                        [ring-mock "0.1.5"]
                        [org.clojure/data.json "0.2.6"]
                        [ring/ring-devel "1.4.0"]]}}
  :plugins [[speclj "3.3.1"]
            [lein-ring "0.9.7"]]
  :main tic.ui.swing
  :test-paths ["spec"])
