#!/bin/bash

node src/main/server.js & echo $! > node.pid
yarn test
kill -9 $(<node.pid)
rm node.pid
