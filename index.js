// Load the required modules
const updatechecker = require("./addons/updater.js");
const express = require("./apps/express.js")
const logger = require("./addons/logger")
logger.log(`Starting server`)

// update checker
updatechecker.checkForUpdate();

// Start the express server
express.start();