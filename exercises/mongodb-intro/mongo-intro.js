var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/racecars", function (err){
    if(err){
        throw err;
    }
    console.log("connected to database");
});



myCar.save(function(err){
    if(err){
        throw err
    }
    console.log(myCar);
});

console.log(myCar);

app.listen(8000);