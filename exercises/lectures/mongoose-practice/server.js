var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require ("mongoose");
var port = process.env.PORT || 8000;
var path = require("path");

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/lms", function(err){
    if(err) throw err;
    console.log("connected to MongoDB");
});

app.use("/students", require("./routes/student-routes"));

app.listen(port, function(){
    console.log("connected to " + port);
})