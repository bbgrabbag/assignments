var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var mongoose = require("mongoose");
var morgan = require("morgan");

mongoose.connect('mongodb://localhost/cars', function(err){
    if(err) throw err;
    console.log("connected");
});

var port = process.env.PORT || 8000; 

app.use("/cars", require("./routes/car-router.js"));
app.use("/person", require("./routes/person-router.js"))


app.listen(port, function(){
    console.log("listening on port" + port)
});