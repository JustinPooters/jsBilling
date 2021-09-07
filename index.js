// Load the required modules
const updatechecker = require("./addons/updater.js");
const express = require("./apps/express.js")

// update checker
updatechecker.checkForUpdate();

// Start the express server
express.start();

