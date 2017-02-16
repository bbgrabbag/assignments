var express = require("express");

var uuid = require("uuid");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var bounties =[];


app.get("/bounties", function (req, res){
    console.log(bounties);
    res.send(bounties);
});
app.get("/bounties/:id", function (req,res){
    for(var i = 0; i < bounties.length; i++){
        if(req.params.id === bounties[i].id){
            console.log(bounties[i]);
            return res.send(bounties[i]);
        } else {
            return res.send({
                error: "ID not found"
            });
        }
    }
});

app.post("/bounties", function (req, res){
    req.body.id = uuid.v4();
    bounties.push(req.body);
    console.log(bounties);
    res.send(req.body.id);
});



app.delete("/bounties/:id", function(req, res){
    for(var i = 0; i < bounties.length; i++){
        if(req.params.id === bounties[i].id){
            bounties.splice([i], 1);
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
        bounties[i] = req.body; 
            console.log(bounties);
           return res.send("Update Successful!");
        } else {
            return res.send({
                message: "Not found!"
            });
        }
    }
});


app.listen(8000, function(){
    console.log("App is listening on port 8000");
});