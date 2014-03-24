"use strict";

// Requirements
var rethinkdb = require("rethinkdb"),
    storage = require('./modules/storage');

// Courier
exports.index = function(request, response) {
    response.render("index");
};

exports.partial = function(request, response) {
    response.render("partials/" + request.params.partial);
};

// exports.getPosts = function(request, response) {
//     storage.openStorage(function(connection)) {
//         rethinkdb.table("...").run(connection, function(error, cursor) {
//             cursor.toArray(function(error, result) {
//                 if (!error) {
//                     response.send(result);
//                 } else {
//                     console.log("Database: ERROR, " + error);
//                 }
//
//                 storage.closeStorage();
//             });
//         });
//     }
// };
//
// exports.getPost = function(request, response) {
//     storage.openStorage(function(connection)) {
//         rethinkdb.table("...").get(request.params.post).run(connection, function(error, result) {
//             if (!error) {
//                 response.send(result);
//             } else {
//                 console.log("Database: ERROR, " + error);
//             }
//
//             storage.closeStorage();
//         });
//     });
// };
//
// exports.addPost = function(request, response) {
//     storage.openStorage(function(connection)) {
//         rethinkdb.table("...").insert(request.params.post).run(connection, function(error, result) {
//             if ((!error) && (result.inserted === 1) {
//                 response.send("OK");
//
//                 storage.closeStorage();
//             } else {
//                 console.log("Database: ERROR, " + error);
//             }
//
//             storage.closeStorage();
//         });
//     });
// };
//
// exports.removePost = function(request, response) {
//     storage.openStorage(function(connection)) {
//         rethinkdb.table("...").get(request.params.post).delete().run(connection, function(error, result) {
//             if ((!error) && (result.deleted === 1)) {
//                 response.send("OK");
//             } else {
//                 console.log("Database: ERROR, " + error);
//             }
//
//             storage.closeStorage();
//         });
//     });
// };
