```
sudo docker build -t gcr.io/workplacex-179405/workplacex/wishlists-server . 
```
```
gcloud docker -- push gcr.io/workplacex-179405/workplacex/wishlists-server:latest
```
```
kubectl apply -f k8s/deployment.yml
```
