function start() {
    const express = require('express');
    const fs = require('fs')
    let info = require("../about.json");
    const logger = require("../addons/logger")

    const app = express();
    const port = 1001;
    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/public'));

    const path = './.env'
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
            logger.log(`jsBilling started on: http://localhost:${port}`);
        });

    } else {
        function noenv() {
            logger.error(`Please rename the .env.example to .env`)
            logger.error(`and fill in the nessecery information (db)`)
            logger.error(`then restart the server`)
        }
        setTimeout(noenv, 500);
    }
}

module.exports = {
    start: start
};