"use strict";

// Requirements
var rethinkdb = require("rethinkdb");

// Storeage
exports.openStoreage = function() {
    rethinkdb.connect({ host: localhost, port: 28015, db: "..." }, function(error, connection) {
        if (!error) {
            console.log("Storeage: OK");
        } else {
            console.log("Storeage: ERROR, " + error);
        }
    });
};

exports.closeStoreage = function(connection) {
    connection.close();
};
