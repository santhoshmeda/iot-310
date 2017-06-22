# RPi revisited, sending data up to MQTT broker

This lab is to get us back up to a stable point with our RPi and make sure everyone is on the same page. All version, libs, etc are running smoothly. We will run through some previous labs to get us up and running, these files have been edited to focus only on their specific use case.

Some files require system `python` dependencies:
- `mqtt` library can be found at the [Paho MQTT site](https://pypi.python.org/pypi/paho-mqtt/1.1#installation).
- `sense-hat` library can be found at the [SenseHAT site](https://github.com/RPi-Distro/python-sense-hat).


## Read SenseHAT data (from Course 1, Lab 6)

Let's find a file that grabs all the data we need from the SenseHAT and provides a JSON object we can use to send to a MQTT broker. Luckily, we built this file in Lab1 of Course 1!

This file has been added for your convenience as `sense.py` within this directory. 

## Sending test data via MQTT client (from Course 2)

This file has been added for your convenience as `mqtt_publish.py` within this directory. 

## SenseHAT data over MQTT (from Course 1, Lab 9)

Using the `mqtt_client.py`, modify the `hostname` variable to include your own. We will use a topic channel of **iot-310B** with a subtopic of your hostname.

**Note**: Originally the file did this automatically, but during testing it failed so better safe than sorry!

## Setup a MQTT Listener for the RPi

Have the RPi listen to other RPi messages (we've done this before, but good practice). 

Using the `mqtt_listener.py`, modify the `hostname` variable to include your own. We will use a topic channel of **iot-310B** with a subtopic of your hostname.

**Note**: Originally the file did this automatically, but during testing it failed so better safe than sorry!

This file has been added for your convenience as `mqtt_listener.py` within this directory. 