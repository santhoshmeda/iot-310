# Multi-container services on RPi

This lab will be entirely done ad-hoc in class. Please review the video for information. We will add links here as the class goes on and as questions are asked.

## Install Docker on RPi

[https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/](https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/)

Effectively run this command:

```bash
# Install Docker on RPi
pi$ curl -sSL https://get.docker.com | sh

# Add docker to a non-root user
pi$ sudo usermod -aG docker pi

pi$ docker pull resin/rpi-raspbian

pi$ docker run -it resin/rpi-raspbian bash

pi$ 
```

## Use Case 1 - Live Edition

Ensure each sensor app is decoupled from each other at the edge.