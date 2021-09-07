function start() {
    const express = require('express');
    const fs = require('fs')

    let info = require("../about.json");
    const app = express();
    const port = 1001;
    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/public'));

    const path = './config.env'
    if (fs.existsSync(path)) {

        app.get('/', (req, res) => {
            let businessname = info.name;
            let tagline = info.tagline;
            let email = info.email;
            let phone = info.phone;
            let website = info.website;

            res.render('pages/index', {
                name: businessname,
                tagline: tagline
            });
        });


        app.listen(port, () => {
            console.log(`========================================================`)
            console.log(`jsBilling started on: http://localhost:${port}`);
            console.log(`========================================================`)
        });
    } else {

        app.get('/', (req, res) => {
            let businessname = 'jsBilling';

            res.render('pages/setup', {
                name: "jsBilling",
                tagline: "jsBilling setup"
            });
        });

    }
}

module.exports = {
    start: start
};