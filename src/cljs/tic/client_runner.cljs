(ns tic.client-runner
  (:require
    [tic.client :as client]))

(.log js/console "mounting it")
(client/mountit)

