'use strict';

const ObjectID = require('mongodb').ObjectID;

const ScopeService = function(db) {
    this.db = db;
};

/**
 * 
 * @param {String} id
 * @returns {Promise} 
 */
ScopeService.prototype.getById = function(id) {
    const details = { '_id': new ObjectID(id) };

    return new Promise((resolve, reject)=>{
        this.db.collection('scopes').findOne(details, (err, item) => {
            if (err) {
                reject({'error':'An error has occurred'});
            } else {
                resolve(item);
            }
        });
    });
};

ScopeService.prototype.insert = function(scope) {
    return new Promise((resolve, reject) => {
        this.db.collection('notes').insert(note, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
              } else {
                res.send(result.ops[0]);
              }
        });
    });
};

module.exports = ScopeService;