.DEFAULT_GOAL := up

help:
	@echo
	@echo
	@echo " make build			- compile & build main image(s)"
	@echo
	@echo " make (up)			- run container(s) in development mode"
	@echo
	@echo " make down			- removes the container(s)"
	@echo
	@echo

GCP_PROJECT = workplacex-179405/workplacex
TS := $(shell /bin/date "+%Y-%m-%d_%H-%M-%S")
## if APPS is empty then use hard-coded dirs
ifeq ($(strip $(APPS)),)
CODE_DIRS = users-server wishlists-server items-server filters-server client-gateway
else
CODE_DIRS = $(APPS)
endif

init:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir init; \
	done

build:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir build; \
	done

up:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir up; \
	done

down:
	$(MAKE) -C client-gateway down;

build-gcr: npm-build
	for dir in $(CODE_DIRS); do \
		sudo docker build \
		-f $$dir/Dockerfile.prod \
		-t gcr.io/${GCP_PROJECT}/$$dir \
		.; \
	done

ship:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir ship; \
	done

deploy:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir deploy; \
	done

bsd:
	for dir in $(CODE_DIRS); do \
		$(MAKE) -C $$dir build ship deploy; \
	done

.PHONY: up-dev down ship deploy