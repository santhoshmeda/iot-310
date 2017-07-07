# Start from an image that is compliant with ARMv7 and is Debian based
FROM resin/rpi-raspbian

# Inspired by: https://github.com/remonlam/rpi-docker-weather/blob/master/Dockerfile
RUN apt-get update
RUN apt-get install -y wget \
                       python \
                       sense-hat

# Cleanup to save space
RUN rm -rf /tmp/*.dep

# Download test python script
RUN wget -P / https://raw.githubusercontent.com/remonlam/rpi-docker-weather/master/python_scripts/test.py

# Make it run when container is started
CMD ["python", "/test.py"]