'use strict';

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err);
    }

    routes(app, database);

    app.listen(port, () => {
        console.log('listening on ' + port);
    });
});

