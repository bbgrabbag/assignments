var express = require("express");
var terranRouter = express.Router();

var terranRace = {
    origin: ["Earth"],
    buildings: [],
    units: []
};

terranRouter.route("/")
    .get(function (req, res) {
    console.log(req.terranCall + "\nLogged: " + req.logTime);
        res.send(terranRace);
    });

terranRouter.route("/:objProp")
    .get(function (req, res) {
        var keys = Object.keys(terranRace);
        var found;
        for (var i = 0; i < keys.length; i++) {

            if (keys[i] === req.params.objProp) {
                
                return res.send(terranRace[keys[i]]);
            } else {
                found = false;
            };
        }
        if (!found) {
            return res.send({
                message: "ERROR"
            });
        }

    })
    .post(function (req, res) {
        var keys = Object.keys(terranRace);
        var found;
        for (var i = 0; i < keys.length; i++) {

            if (keys[i] === req.params.objProp) {
                terranRace[keys[i]].push(req.body);
                return res.send({
                    message: "POST SUCCESSFUL"
                });
            } else {
                found = false;
            };
        }
        if (!found) {
            return res.send({
                message: "ERROR"
            });
        }

    });




module.exports = terranRouter;