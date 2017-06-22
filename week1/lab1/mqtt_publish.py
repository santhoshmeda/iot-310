#!/usr/bin/python
# =============================================================================
#        File : mqtt_publish.py
# Description : publish data to an MQTT Broker
#      Author : Drew Gislsason
#        Date : 4/7/2017
# =============================================================================
# pip install paho-mqtt
import paho.mqtt.client as mqtt

topic_name = "iot-310b"

client = mqtt.Client()
client.connect("iot.eclipse.org", 1883, 60)
client.loop_start()

while True:
  s = raw_input("Enter a string to publish: ")
  client.publish(topic_name, s)