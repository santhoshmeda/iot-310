# Week 2: Virtual Machines and Containers

Welcome to Week 2 everyone... it's going to be a fun ride, please provide feedback along the way.

- [Lab 1: Intro to Virtual Machines](lab1/README.md) 
- [Lab 2: Intro to Containers](lab2/README.md)

# Homework

*Note*: The homework can be turned in via screenshots, links to repos, and/or any other reference links. 

1. Modify the shell script in **lab1** inside `Vagrantfile` and install a non-installed Ubuntu package via `apt-get`. Take a screenshot of a successfully installed package. Along with a link to your `Vagrantfile`

2. On your host machine, download any [DockerHub](https://hub.docker.com/) (or [Docker Store](https://store.docker.com/search?source=verified&type=image)) image and run a command within a container that demonstrates the application functioning. Take a screenshot and upload it to your Gitlab or Canvas.
    - For example:
        - `docker pull python`
        - Command to run within container: `python --version`

**Extra (optional)**: 
- Add a `test.txt` file (with your own arbitrary text) to the image we created using `Dockerfile`. Upload the new image to DockerHub and provide a link to your DockerHub.
    - Tip: Use `COPY` command: [https://docs.docker.com/engine/reference/builder/#copy](https://docs.docker.com/engine/reference/builder/#copy)