# Intro to Container

## Overview

This lab will help you get oriented with Docker and why we are using it. 

## Lab Links

- [Docker](https://www.docker.com/)
- [Docker Hub Registry](https://hub.docker.com/)
    - Images uploaded to this registry are maintained by the community and have no support from Docker directly.
- [Docker Store](https://store.docker.com/)
    - This link is only provided as a reference. More details on Docker Store can be found [here](https://docs.docker.com/docker-store/).
    - The Docker Store provides Docker Verified images (as well as access to Docker Hub images). These Docker Verified images are verified by Docker, have a high level of security, and generally subscribe to Docker best practices.
    - In an enterprise setting, this likely would be the route to choose (as depending on publisher) may include a paid support level.

## Use Case

Investigate a way to optimize application density at the edge devices.

## Docker Overview

"Docker provides a method of developing, shipping, and running applications. Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight because they don’t need the extra load of a hypervisor, but run directly within the host machine’s kernel. This means you can run more containers on a given hardware combination than if you were using virtual machines. You can even run Docker containers within host machines that are actually virtual machines!" [Source](https://docs.docker.com/engine/docker-overview/)

So let's breakdown what this means...
    - An **image** in the Docker context is the binary file that contains your code, your code packages, and any system level dependencies.
    - A **container** is an instance of an image. 
    - Containers don't require resource allocation upfront similar to how VMs do, however you can set resource limits per container.
    

## DockerHub Overview

## Installing Docker on Host (Hello, World!)

## Installing Docker on RPi (Hello, World!)


    - Docker Overview
    - DockerHub Overview
    - Installing Docker on Host (Hello, World!)
    - Installing Docker on RPi (Hello, World!)
    - Dockerfile Overview
    - Docker Compose Overview
    - Building for ARM devices
    - Dockerize/containerize centralEdge v1 to centralEdge v2
    - Scaling containers

## Hacker Edition: Learn about managing data within containers

In a standard development workflow with Docker, developers will typically mount their host's application  folder to the container's application folder providing a way to edit code locally on the host and it reflecting immediately within the container.

You can read more about this on [Manage data in containers](https://docs.docker.com/engine/tutorials/dockervolumes/) under the section [Mount a Host Directory as a Data Volume](https://docs.docker.com/engine/tutorials/dockervolumes/#mount-a-host-directory-as-a-data-volumeMount)