# Lab 2 - Electron

## Overview

Electron enables you to create desktop applications with web technologies you know! HTML/CSS/JS! There is also a rich set of operating system APIs you can use (which we won't cover now). Electron uses Node.js runtime for the backend and Chromium for the frontend.

- Learn how to build/edit an Electron app.
- Have an editable Electron app that you can modify to your needs.

### Requirements

- Windows, Mac, or Linux machine

### Download Electron Demos

Before you go down the process of working with Electron, it's best to see a final product. `Visual Studio Code`, `Atom` and `Slack` are popular examples created using Electron (*Fun Fact: GitHub created Electron to make Atom*).

Download the [Electron Demos App](https://github.com/electron/electron-api-demos/releases) to get a feel for what Electron can do (it shows off native OS API calls too!). Download the latest version (1.3.0 at time of writing) for your OS.

### Anatomy of an Electron app

An Electron app reflects similarly to a NodeJS application if you've had experience with those projects, if not, no worries -- let's break it down.

**Example project structure**

```text
your-app/
├── package.json
├── main.js
└── index.html
```

The file that describes all the packages needed to run this app are within `package.json`. Electron will first try to execute whatever value is set for `"main"` (typically `main.js`). If a value isn't provided, it will attempt to load `index.js`. 

There is a default `main.js` that will load the `index.html` file as well. These two files will recieve the bulk of the updates/edits.

**Example `package.json`**

```json
{
  "name"    : "your-app",
  "version" : "0.1.0",
  "main"    : "main.js"
}
```

## Guide

**Note**: Everything related to this guide is from the perspective of a field worker who has as laptop with internet connection. So run this on your laptop, not on the RPi.

#### Install NodeJS

Follow the instructions at [https://nodejs.org/](https://nodejs.org/) to install Node.js (please install the **Current** release, v8.1.2 at time of writing). Downloads are available for Windows, Mac, and Linux.

Installing Node.js will also give you a package manager called `npm`.

**Verify Successful Installation**

*Note*: Stable or latest real

```bash
$ node --version
# v8.1.2
$ npm --version
# v5.0.3
```

#### Download the Electron Quick Start app

**Note**: For the purposes on this class, I've included all the necessary items from the git repo of [Electon Quick start](https://github.com/electron/electron-quick-start) so it's easier to work with to start *(e.g. Bootstrap 4 has already been added to the package list)*. Feel free to ask any questions if you need to know more.

Make sure you are within the **week1/lab2** folder as `npm` creates a folder called `node_modules` where it stores all the binaries for the packages installed. All packages to be installed are listed under `package.json`.

```bash
# Install dependencies
$ npm install

# Run electron (alternatively you can run use "npm start")
$ electron .
```

To exit the Electron app, hit `CTRL+C` (typically twice, one to exit Node.js app and one to exit Electron)

#### Installing 


### Troubleshooting

Don't forget about MQTTfx for debugging (effectively you are creating the same app!) [http://www.jensd.de/apps/mqttfx/1.5.0/](http://www.jensd.de/apps/mqttfx/1.5.0/)

There are more MQTT tools listed here: [http://www.hivemq.com/blog/seven-best-mqtt-client-tools](http://www.hivemq.com/blog/seven-best-mqtt-client-tools)