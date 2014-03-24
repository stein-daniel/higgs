"use strict";

// Requirements
var bcrypt = require("bcrypt"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    cookieSession = require("cookie-session"),
    expressSession = require("express-session"),
    express = require("express"),
    rethinkdb = require("rethinkdb"),
    courier = require('./modules/courier'),
    storage = require('./modules/storage');

var server = express();

// Server
server.set("view engine", "jade");
server.set("views", __dirname + "/views");

server.use(bodyParser());
server.use(cookieParser());
server.use(cookieSession({ key: ["1", "2"] }));
server.use(expressSession({ secret: "1234" }));
server.use(express.static(__dirname + "/public"));

server.get("/", courier.index);
server.get("/partials/:partial", courier.partial);
server.get("*", courier.index);

server.listen(4000, function(error) {
    if (!error) {
        console.log("Server: OK");
    } else {
        console.log("Server: ERROR, " + error);
    }
});
