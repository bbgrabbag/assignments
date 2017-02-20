var express = require("express");
var app = express();


var terranUnits = [
    {
        name: "Marine",
        type: "Ground",
        range: 5,
        tier: 1
    },
    {
        name: "Hellion",
        type: "Ground",
        range: 3,
        tier: 2
    },
    {
        name: "Banshee",
        type: "Air",
        range: 6,
        tier: 2
    },
    {
        name: "SCV",
        type: "Ground",
        range: 1,
        tier: 1
    },
    {
        name: "Battlecruiser",
        type: "Air",
        range: 6,
        tier: 3
    }
];

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

app.get("/terran-units", function (req, res) {
    queriedObj = [];
    console.log(Object.keys(terranUnits[1]));
    if (!isEmpty(req.query)) {
        for (var i = 0; i < terranUnits.length; i++) {
            if (req.query.type === terranUnits[i].type) {
                queriedObj.push(terranUnits[i]);
            } else if (req.query.range === terranUnits[i].range){
                queriedObj.push(terranUnits[i]);
            } else if (req.query.name === terranUnits[i].name){
                queriedObj.push(terranUnits[i]);
            } else if(req.query.tier === terranUnits[i].tier){
                
            }
        }
        return res.send(queriedObj);
    } else {
        return res.send(terranUnits);
    }

});

app.get("/terran-units/:name", function (req, res) {
    for (var i = 0; i < terranUnits.length; i++) {
        if (req.params.name === terranUnits[i].name) {
            return res.send(terranUnits[i]);
        }
    }
});



app.listen(8000, function () {
    console.log("Listening at port 8000");
});