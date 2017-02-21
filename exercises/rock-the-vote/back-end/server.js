var express = require("express");
var app = express();
var uuid = require("uuid");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var path = require ("path");
app.use(express.static(path.join(__dirname, "..", "front-end")));

var issues = [];

app.get("/issues", function(req,res){
    return res.send(issues);
});

app.get("/issues/:id", function(req,res){
    console.log (req.params)
    var found = false;
    for(var i = 0; i < issues.length; i++){
        if(req.params.id === issues[i].id){
            found = true;
            return res.send(issues);
           
            
        }
    }
    if (!found){
        return res.send("ERROR NOT FOUND");
    }
    console.log(issues);
});

app.post("/issues", function(req,res){
    req.body.id = uuid.v4();
    issues.push(req.body);
    return res.send("POST SUCCESSFUL");
    console.log(issues);
});

app.put("/issues/:id", function(req,res){
    var found= false;
    for(var i = 0; i < issues.length; i++){
        if(req.params.id === issues[i].id){
            found= true;
             issues[i] = req.body;
            return res.send("UPDATE SUCCESSFUL");
            
        }
    };
    if(!found){
        return res.send("ERROR NOT FOUND");
    }
});

app.delete("/issues/:id", function(req,res){
    var found= false;
    for(var i = 0; i < issues.length; i++){
        if(req.params.id === issues[i].id){
            found= true;
             issues.splice(i,1);
            return res.send("DELETE SUCCESSFUL");
            
        }
    };
    if(!found){
        return res.send("ERROR NOT FOUND");
    }
});



app.listen(8000, function(){
    console.log ("Listening on port 8000")
});