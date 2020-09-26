# Setup your local development workflow with Kubernetes and Skaffold

This repository includes the source code for the demo application as well as deployment and service manifests needed for the setup. **If you intend to follow along, please clone this repository and follow the prerequisites to make sure you have the appropriate environment setup.**
To clone the repository - `git clone git@github.com:amoury/cncf-k8-workshop.git`.

## Repo structure

There are 4 branches - 

1. `master` - This contains code for the complete setup with Deployment manifests and Skaffold.
2. `0-starter` - This is the starter branch with dockerized demo application source code. This will be used as the starting point.
3. `1-infra` - This branch contains the Kubernetes deployment manifests inside the `infra` directory.
4. `2-skaffold` - This branch includes the skaffold configuration file at the root of the project.

You can skip any step and catchup from any of the stages, by checking out the relevant branch - `git checkout <branch-name>`

## Prerequisites

- We use [**Docker Desktop**](https://www.docker.com/products/docker-desktop), but having **minikube** also works for local kubernetes engine.
- Make sure you have **skaffold** installed. Please follow these [instructions](https://skaffold.dev/docs/install/) if you need to install.


## Links (we may need)

- Download Docker for Desktop - [link](https://www.docker.com/products/docker-desktop)
- Dockerhub links to the images we use - 
    - [users-service](https://hub.docker.com/repository/docker/amourycodes/users-service)
    - [posts-service](https://hub.docker.com/repository/docker/amourycodes/posts-service)
    - [blog-frontend](https://hub.docker.com/repository/docker/amourycodes/blog-frontend)
    
- Ingress-nginx - 
    - [Installation instructions in the cluster](https://kubernetes.github.io/ingress-nginx/deploy/)
    - [Basic usage example](https://kubernetes.github.io/ingress-nginx/user-guide/basic-usage/)
    
- Skaffold -
    - [Installation instructions](https://skaffold.dev/docs/install/)
    - [Reference for file sync](https://skaffold.dev/docs/pipeline-stages/filesync/)
    - [skaffold.yaml property references](https://skaffold.dev/docs/references/yaml/)
