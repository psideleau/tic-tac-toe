(ns tic.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [tic.client-test]))

(doo-tests 'tic.client-test)



