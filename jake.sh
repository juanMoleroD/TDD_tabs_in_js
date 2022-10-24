#!/bin/sh

#this is a test, spacing is important here 
[ ! -f node_modules/.bin/jake ] &&  echo "Building npm modules:" && npm rebuild 

node_modules/.bin/jake $*