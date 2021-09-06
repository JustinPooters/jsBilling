// Load the required modules
const express = require('express');
const http = require('http');
const updatechecker = require("./addons/updater.js");

// update checker
updatechecker.checkForUpdate();

// Create the app (Express)
const app = express();

// Set the port, i chose 1001 because why not
const port = 1001;

// Create a basic route for Hello world
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Set the app and log the "i'm alive" to the console
app.listen(port, () => {
    console.log(`========================================================`)
    console.log(`jsBilling started on: http://localhost:${port}`);
    console.log(`========================================================`)
});