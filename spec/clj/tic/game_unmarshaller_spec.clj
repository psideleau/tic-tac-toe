(ns tic.game-unmarshaller-spec
  (:require [speclj.core :refer :all]
            [tic.game-controller :as game-controller]
            [clojure.data.json :as json]
            [tic.game-unmarshaller :as game-unmarshaller]
            [tic.board :as board]))

(describe "unmarshalling a game json request"
  (it "should marshall a game"
      (let [expected-game (game-controller/start {:player :O :player-first true })
            json-game (json/write-str expected-game)
            partial-marshalled-game (json/read-str json-game :key-fn keyword)]
        (should= expected-game (game-unmarshaller/unmarshall partial-marshalled-game))
  )))
