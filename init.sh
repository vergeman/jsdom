#!/usr/bin/env bash

python3.6 ./test/web-platform-tests/tests/wpt.py make-hosts-file | tee -a /etc/hosts
yarn
yarn prepare
yarn pretest
