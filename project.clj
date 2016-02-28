(defproject tic "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.4.0"]
                 [hiccup "1.0.5"]
                 [ring-server "0.4.0"]
                 [ring/ring-json "0.4.0"]
                 ;;ClojureScript
                 [org.clojure/clojurescript "1.7.122"]
                 [cljs-ajax "0.5.1"]
                 [prismatic/dommy "1.1.0"]
                 [reagent "0.6.0-alpha"]]
  :source-paths ["src/clj"]

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
            [lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-4"]]
  :cljsbuild {
              :builds [ { :id "test"
                         :source-paths ["src/cljs"]
                         :figwheel true
                         :compiler {:asset-path "js/out"
                                    :output-to "resources/public/js/app.js"
                                    :output-dir "resources/public/js/out"
                                    :optimizations :none
                                    :source-map true} }
                       ]
              }
  :main tic.ui.swing
  :test-paths ["spec"]
  :figwheel {
             :http-server-root "public" ;; this will be in resources/
             :server-port 3449          ;; default
             :server-ip   "0.0.0.0"     ;; default

             ;; CSS reloading (optional)
             ;; :css-dirs has no default value
             ;; if :css-dirs is set figwheel will detect css file changes and
             ;; send them to the browser
             :css-dirs ["resources/public/css"]

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server
             :ring-handler tic.ui.handler/app

             ;; Clojure Macro reloading
             ;; disable clj file reloading
             ; :reload-clj-files false
             ;; or specify which suffixes will cause the reloading
             ; :reload-clj-files {:clj true :cljc false}

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Load CIDER, refactor-nrepl and piggieback middleware
             ;;  :nrepl-middleware ["cider.nrepl/cider-middleware"
             ;;                     "refactor-nrepl.middleware/wrap-refactor"
             ;;                     "cemerick.piggieback/wrap-cljs-repl"]

             ;; if you need to watch files with polling instead of FS events
             ;; :hawk-options {:watcher :polling}
             ;; ^ this can be useful in Docker environments

             } )