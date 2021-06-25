#!/usr/bin/env bash
DEFAULT_CMD='zsh'


#if # args greater than 0, set DEFAULT_CMD to input values
if [ $# -gt "0" ]; then
    DEFAULT_CMD=$1
fi

sudo docker run \
     --mount type=bind,source="$(pwd)"/,target=/jsdom \
     -p 8000:8000 \
     -p 8443:8443 \
     -it vergeman/jsdom:latest \
     $DEFAULT_CMD
