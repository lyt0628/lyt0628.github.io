run: 
	~/hugo_extended_0.140.1_Linux-64bit/hugo serve
clean:
	rm -rf resources public

build:
	~/hugo_extended_0.140.1_Linux-64bit/hugo build

.PHONY:	run clean build
