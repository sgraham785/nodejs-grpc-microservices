```
sudo docker build -t workplacex/filters-server . 
```
```
docker tag workplacex/items-server gcr.io/workplacex-179405/workplacex/items-server:latest
```
```
gcloud docker -- push gcr.io/workplacex-179405/workplacex/items-server:latest
```
```
kubectl apply -f k8s/deployment.yml
```
