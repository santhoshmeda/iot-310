// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var wsMQTTConnectionString = "ws://iot.eclipse.org:80/ws"

        var mqtt = require('mqtt')
        var client  = mqtt.connect(wsMQTTConnectionString)