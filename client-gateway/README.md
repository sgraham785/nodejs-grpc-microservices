```
sudo docker build -t gcr.io/workplacex-179405/workplacex/client-gateway . 
```
```
gcloud docker -- push gcr.io/workplacex-179405/workplacex/client-gateway:latest
```
```
kubectl apply -f k8s/deployment.yml
```
