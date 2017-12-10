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
        this.db.collection('notes').insert(scope, (err, result) => {
            if (err) {
                reject({ 'error': 'An error has occurred' }); 
              } else {
                resolve(result.ops[0]);
              }
        });
    });
};

module.exports = ScopeService;