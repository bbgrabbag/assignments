var express = require("express");
var app = express();
var bodyParser = require ("body-parser");
app.use(bodyParser.json());




var llamas = [];

app.get("/", function(req, res){
    res.send({success: true, message: "I'm alive!!", data: {info: "value"}});
    console.log(req.body);
});

app.post ("/", function(req, res){
    llamas.push(req.body);
    res.send(req.body);
});

app.listen(8000, function(){
    console.log ("Server listening on port 8000");
});

console.log (llamas);


