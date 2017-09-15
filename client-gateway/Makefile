.DEFAULT_GOAL := init

WORKSPACE = wpx
APP = client-gateway
REGISTRY = gcr.io
GCP_PROJECT = workplacex-179405/workplacex
TSTAMP := $(shell /bin/date "+%Y-%m-%d_%H-%M-%S")

ifdef GIT_COMMIT
  export IMAGE_NAME = ${REGISTRY}/${GCP_PROJECT}/${APP}:${GIT_COMMIT}
else
  export IMAGE_NAME = ${REGISTRY}/${GCP_PROJECT}/${APP}
endif

help:
	@echo
	@echo
	@echo " make (init)			- compile, build image(s) & run container(s) in development mode"
	@echo
	@echo " make build			- compile & build main image(s)"
	@echo
	@echo " make up			- run container(s) in development mode"
	@echo
	@echo " make test			- creates container(s), run tests, then removes container(s)"
	@echo
	@echo " make down			- stops & removes the container(s)"
	@echo
	@echo " make ship 			- pushes build image to registry"
	@echo
	@echo " make deploy 			- apply new image to cluster"
	@echo
	@echo

init: compose-build up
clean:
	- sudo docker-compose -f dkr/docker-compose.yml down
	- sudo rm -rf node_modules
npm-install:
	npm set progress=false && \
	npm config set depth 0 && \
	npm install && \
	npm cache clean --force
build:
	@echo "Building source..."
	npm run build
	@echo "Building image..."
	sudo docker build --squash -f Dockerfile -t $(IMAGE_NAME) ../
compose-build: clean
	@echo "Compiling source..."
	sudo docker-compose -f dkr/docker-compose.yml \
	run --rm $(WORKSPACE)_$(APP) make npm-install
ship:
	gcloud docker -- push $(IMAGE_NAME):latest
deploy:
	sed -i '.bak' 's/timestamp/${TSTAMP}/g' k8s/deployment.yml; \
	kubectl apply -f k8s/deployment.yml; \
	sed -i '.bak' 's/${TSTAMP}/timestamp/g' k8s/deployment.yml; \
	rm k8s/deployment.yml.bak
up:
	sudo docker-compose -f dkr/docker-compose.yml up -d
down:
	sudo docker-compose -f dkr/docker-compose.yml down --remove-orphans
test:	down
	sudo docker-compose -f docker/test.yml run --rm test-app
	sudo docker-compose -f docker/test.yml down --remove-orphans

.PHONY: clean npm-install up down test deploy