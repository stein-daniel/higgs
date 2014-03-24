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

var server = express(),
    router = express.Router();

// Server
server.set("view engine", "jade");
server.set("views", __dirname + "/views");

server.use(bodyParser());
server.use(cookieParser());
server.use(cookieSession());
server.use(expressSession({ secret: "..." }));
server.use(express.static(__dirname + "/public"));

router.get("/", courier.index);
router.get("/partials/:partial", courier.partial);
router.get("*", courier.index);

server.listen(4000, function(error) {
    if (!error) {
        console.log("Server: OK");
    } else {
        console.log("Server: ERROR, " + error);
    }
});
