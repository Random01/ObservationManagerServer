'use strict';

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes');
routes(app, {});
//require('./routes')(app, {});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let db;

MongoClient.connect('mongodb://TestUser:Ht98pkrs@ds111876.mlab.com:11876/my-test-database', (err, database) => {
    if (err) {
        return console.log(err);
    }

    db = database;
    app.listen(port, () => {
        console.log('listening on ' + port);
    });
});

