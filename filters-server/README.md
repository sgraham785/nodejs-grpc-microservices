```
sudo docker build -t workplacex/filters-server . 
```
```
docker tag workplacex/filters-server gcr.io/workplacex-179405/workplacex/filters-server:latest
```
```
gcloud docker -- push gcr.io/workplacex-179405/workplacex/filters-server:latest
```
```
kubectl apply -f k8s/deployment.yml
```
