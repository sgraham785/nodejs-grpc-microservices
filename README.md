# WorkplaceX Backend

This is the backend response server and RESTful routing gateway for the WorkplaceX Project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

There are a few things you will need to get this running on your local machine

* Make (Mac should just have it, Windows might need [this](http://gnuwin32.sourceforge.net/packages/make.htm)])
* [Docker](https://docs.docker.com/engine/installation/#desktop)

### Installing

This should install everything the apps need to run on your local machines.
```
cd workplace-api
make
```
Seed the items database (defaults to 97 records)
```
cd items-server
npm run db:seed
```
**NOTE:** Full text search may take sometime to index after your first request. TODO: add way to verify search index is available, for now use [MongoDB Compass](https://docs.mongodb.com/compass/master/install/)

Seed the filters database:
```
cd ../filters-server
npm run db:seed
```

### Usage

You can then use swagger or `curl` for requests:
```
curl http://localhost:3000/v0/items/\?sort\=-name 
```
To stop all the containers: 
```
cd /path/to/workplace-api
make down
```
To start them back up again with out rebuilding them:
```
cd /path/to/workplace-api
make up-dev
```

### Swagger

After app servers start up swagger ui will automatically read from the rest-server/api-docs.json. You should be able to access swagger [here](http://localhost:8080)

## Running the tests

TODO

## Deployment

Change into directory of single project:
```
cd /path/to/project
```
Build image:
```
make build
```
Tag image for registry:
```
docker tag workplacex/filters-server gcr.io/workplacex-179405/workplacex/filters-server:latest
```
Push tagged image to registry:
```
gcloud docker -- push gcr.io/workplacex-179405/workplacex/filters-server:latest
```
Auth to container cluster:
```
gcloud container clusters get-credentials workplacex-prototype --zone us-west1-a --project workplacex-179405
```
Connect to Kubrenetes GUI:
```
kubectl proxy
http://localhost:8001/ui
```
Change directory to single project:
```
cd /path/to/project
```
Create deployment:
```
kubectl create -f k8s/deployment.yml
```
Create service:
```
kubectl create -f k8s/service.yml
```

## Built With

* GRPC
* Protobufs
* Mongoose
* MongoDB
* Express

## Contributing
1. Create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull/merge request to a maintainer :D

## Versioning

We will use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](#). 

## Authors

* **Sean Graham** - *Initial work* - [sgraham785](https://github.com/sgraham785)

