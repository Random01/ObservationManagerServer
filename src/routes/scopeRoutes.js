'use strict';

const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.post('/scopes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('scopes').findOne(details)
    });
};