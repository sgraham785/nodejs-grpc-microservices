.DEFAULT_GOAL := build-dev

help:
	@echo
	@echo
	@echo " make				- compile & build main image(s)"
	@echo
	@echo

CODE_DIRS = items-server rest-gateway

build-dev:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir build-dev; \
	done

up-dev:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir up-dev; \
	done

down:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir down; \
	done

.PHONY: up-dev down