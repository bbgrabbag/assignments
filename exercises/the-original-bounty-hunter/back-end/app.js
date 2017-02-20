var express = require("express");
var app = express();
var uuid = require("uuid");
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;

app.use(bodyParser.json());

var path = require ("path");
app.use(express.static(path.join(__dirname, "..", "front-end")));

var bounties = [];

app.get("/bounties", function (req, res){
    console.log(bounties);
    res.send(bounties);
});

app.post("/bounties", function (req, res){
    req.body.id = uuid.v4();
    bounties.push(req.body);
    res.send ("Post successful");
});



app.delete("/bounties/:id", function(req, res){
    for(var i = 0; i < bounties.length; i++){
        if(req.params.id === bounties[i].id){
            bounties.splice(i, 1);
            console.log(bounties);
            return res.send({
                message: "Object was deleted!"
                
            });
        } else {
            console.log(bounties);
            return res.send({
             message: "Not found!"
            });
        }
    }
});

app.put("/bounties/:id", function (req, res){
    for(var i = 0; i < bounties.length; i++){
        if(req.params.id === bounties[i].id){
        bounties[i].name = req.body.name;
            bounties[i].reward = req.body.reward;
            bounties[i].type = req.body.type;
            console.log(bounties[i]);
            res.send ("Update successful!");
        }
    }
});


app.listen(port, function(){
    console.log("App is listening on port" + port);
});