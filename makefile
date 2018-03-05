SHELL := /bin/bash

CODE_DIR=build/code
DOC_DIR=build/docs
SRC_DIR=src/runtime
PWD=$(shell pwd)
LINT_FILE=${PWD}/${CODE_DIR}/lint_output
EXIT_FILE=${PWD}/exit.txt
STATUS=0

all:  move-static

init: 
	./init.sh

build: init
	make -f tangle-make -k all

move-static: build
	rsync -a src/info ${CODE_DIR}/runtime/

clean:	
	make -f tangle-make clean

move-to-var:
	rm -rf /var/www/html/*
	rsync -a ${PWD}/${CODE_DIR}/runtime/ /var/www/html/
