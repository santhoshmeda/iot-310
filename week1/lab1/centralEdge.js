'use strict'

/** This application sends and receives MQTT messages
*   to a CLOUD_GATEWAY (i.e. MQTT broker).
*
* Usage (from this directory): npm start
*/

// Require libs
const mqtt = require('mqtt')
const os = require("os")

// Find hostname
let hostname = os.hostname()

// Define cloud gateway connection string
const CLOUD_GATEWAY = 'mqtt://iot.eclipse.org:1883'
const MQTT_TOPIC_TOPLEVEL = "iot-310b-2017"
const MQTT_SEPERATOR = "/"

// Initialize the MQTT client by the cloud gateway  
const client = mqtt.connect(CLOUD_GATEWAY)

// Create test data
var utcTime = Date.now()

// Connect client to MQTT broker
let mqttMessageTopic = MQTT_TOPIC_TOPLEVEL + 
                       MQTT_SEPERATOR + 
                       hostname
client.on("connect", () => {
    // Set a relatively unique topic
    // http://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices
    client.publish(mqttMessageTopic, utcTime)
})