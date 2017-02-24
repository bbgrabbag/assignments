var express = require("express");
var app = express();
var mw = require("./middleware");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var uuid = require("uuid");

var database = [];

app.post("/todos", function (req, res) {
    if (mw.isValidEntry(req.body)) {
        req.body.id = uuid.v4();
        database.push(req.body);
        var entryId = database[database.length - 1].id;
        return res.send({
            message: "item posted",
            _id: entryId
        });
    } else {
        return res.send({
            message: "error not valid"
        });
    }
});

app.get("/todos", function (req, res) {
    res.send(database);
});

app.get("/todos/:id", function (req, res) {
    var found = false;
    for (var i = 0; i < database.length; i++) {
        
        if (req.params.id === database[i].id) {
            found = true;
            return res.send(database[i]);
        }
    };
    if (!found) {
        return res.send({
            message: "error not found"
        });
    };
});

app.put("/todos/:id", function (req, res) {
    if (mw.isValidEntry(req.body)) {
    var found = false;
        for (var i = 0; i < database.length; i++) {
            
            if (req.params.id === database[i].id) {
                found = true;
                database[i] = req.body;
                return res.send({
                    message: "update successful",
                    id: database[i].id
                });
            }
        };
        if (!found) {
            return res.send({
                message: "error not found"
            });
        };
    } else {
        return res.send({
            message: "error not valid"
        });
    }
});

app.delete("/todos/:id", function (req, res) {
    var found = false;
    for (var i = 0; i < database.length; i++) {
        if (req.params.id === database[i].id) {
            found = true;
            database.splice(i, 1);
            return res.send({message: "item deleted"});
        }
    };
    if (!found) {
        return res.send({
            message: "error not found"
        });
    };
});



app.listen(8000, function () {
    console.log("listening on port 8000")
});