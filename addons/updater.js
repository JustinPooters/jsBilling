function checkForUpdate() {
    const logger = require("./logger")
    const request = require('request');
    const package = require("../package.json");
    request('https://justinp.dev/jsbilling.html', function(error, response, body) {
        const version = body;
        if (version == package.version) {
            logger.log("You are running the latest version of JSBilling");
        } else {
            logger.warn("Update Available!");
            logger.warn("Current Version: " + package.version);
            logger.warn("New Version: " + version);
            logger.warn("Download: https://github.com/justinpooters/jsbilling");
        };
    });
}

module.exports = {
    checkForUpdate: checkForUpdate,
};