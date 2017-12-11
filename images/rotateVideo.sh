#!/bin/bash

INPUTVIDEO='1496098001682.mp4'
OUTPUTVIDEO='output.mp4'
PREFIX=${INPUTVIDEO%.*}
SUFFIX='_raw.mp4'

ffmpeg -i $INPUTVIDEO -metadata:s:v rotate="360" -codec copy $OUTPUTVIDEO
mv $INPUTVIDEO "$PREFIX$SUFFIX"
mv $OUTPUTVIDEO "$PREFIX.mp4"

#ffmpeg -i ./1499640674588.mp4 -metadata:s:v rotate="360" -codec copy output.mp4
