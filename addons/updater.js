function checkForUpdate() {
    console.log("Checking for update...");
    const request = require('request');
    const package = require("../package.json");
    request('https://justinp.dev/jsbilling.html', function(error, response, body) {
        const version = body;
        if (version == package.version) {
            console.log("You are running the latest version of JSBilling");
        } else {
            console.log("Update Available!");
            console.log("Current Version: " + package.version);
            console.log("New Version: " + version);
            console.log("Download: https://github.com/justinpooters/jsbilling");
        };
    });
}

module.exports = {
    checkForUpdate: checkForUpdate,
};