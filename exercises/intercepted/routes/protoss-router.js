var express = require("express");
var protossRouter = express.Router();

var protossRace = [
    {
        origin: "Aiur",
        buildings: [],
        units: [],
    }
];

protossRouter.route("/")
.get