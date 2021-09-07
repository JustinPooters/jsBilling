function start() {
    var express = require('express');
    // Create the app (Express)
    const app = express();

    // Set the port, i chose 1001 because why not (its the def web port)
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
}

module.exports = {
    start: start
};