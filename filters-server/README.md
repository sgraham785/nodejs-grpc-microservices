```
sudo docker build -t gcr.io/workplacex-179405/workplacex/filters-server . 
```
```
gcloud docker -- push gcr.io/workplacex-179405/workplacex/filters-server:latest
```
```
kubectl apply -f k8s/deployment.yml
```
