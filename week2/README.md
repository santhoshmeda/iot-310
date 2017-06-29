# Week 2: Microservices

Welcome to Week 2 everyone... it's going to be a fun ride, please provide feedback along the way.

- [Lab 1: Intro to Virtual Machines](lab1/README.md) 
- [Lab 2: Intro to Containers](lab2/README.md)

# Homework

*Note*: The homework can be turned in via screenshots, links to repos, and/or any other reference links. 

1. Modify the shell script (`provisioner.sh`) in **lab1** and install a non-installed Ubuntu package via `apt`.
2. Add a `test.txt` file (with your own arbitrary text) to the image  of **centralEdge v2** `Dockerfile`. Upload the new image to DockerHub and provide a link to your DockerHub.
    - Tip: Use `COPY` command: [https://docs.docker.com/engine/reference/builder/#copy](https://docs.docker.com/engine/reference/builder/#copy)
3. On your host machine, download any [DockerHub](https://hub.docker.com/) (or [Docker Store](https://store.docker.com/search?source=verified&type=image)) image and run a command within a container that demonstrates the application functioning. Take a screenshot and upload it to your Gitlab or Canvas.
    - For example:
        - `docker pull python`
        - Command to run within container: `python --version`