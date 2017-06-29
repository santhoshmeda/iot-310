# Intro to Containers

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

In the context of Docker, an **image** is the binary file that contains your code, your code packages, and any system level dependencies. A **container** is an instance of an image. 

This will make more sense during the lab. Right now, it's important to note that at a high-level the following points are key takeaways for containers [Source](https://docs.docker.com/engine/docker-overview/#what-can-i-use-docker-for):

- Fast, consistent delivery of your applications
    - Work in standardized environments using local containers which provide your applications and services.
- Responsive deployment and scaling
    - Because of the portability and how lightweight Docker is, you can dynamically manage workloads, scale up/tear down services with ease in near real-time.
- Running more workloads on the same hardware
    - You can increase app density on the same hardware over hypervisor-based virtual machines, so you can use more of your compute capacity to achieve your business goals. Docker is perfect for high density environments and for small and medium deployments where you need to do more with fewer resources (e.g. the Raspberry Pi).

Let's get into it!

## Up and Running with Docker    



## Docker Hub Overview

Docker Hub is a cloud-based registry service to link to code repositories, stores custom images, and has a plethora of community-backed images for consumption.



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