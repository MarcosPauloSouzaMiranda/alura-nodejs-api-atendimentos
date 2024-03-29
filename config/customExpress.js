const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

module.exports = () => {

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    consign()
        .include('controllers')
        .into(app);

    return app;
}