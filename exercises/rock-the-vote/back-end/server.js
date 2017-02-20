var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var path = require ("path");
app.use(express.static(path.join(__dirname, "..", "front-end")));

var issues = [];

app.get("/", function(req,res){
    return res.send(issues);
});




app.listen(8000, function(){
    console.log ("Listening on port 8000")
});