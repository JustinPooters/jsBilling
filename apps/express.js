function start() {
    var express = require('express');
    var info = require("../about.json");
    // Create the app (Express)
    const app = express();
    // Set the port, i chose 1001 because why not (its the def web port)
    const port = 1001;
    app.set('view engine', 'ejs');

    // Create a basic route for Hello world
    app.get('/', (req, res) => {
            var businessname = info.name;
            var tagline = info.tagline;
            var email = info.email;
            var phone = info.phone;
            var website = info.website;
    
        res.render('pages/index', {
            name: businessname,
            tagline: tagline
        });
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