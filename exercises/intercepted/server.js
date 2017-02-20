var express = require("express");
var app = express();

var port = process.env.PORT || 8000;

var bodyParser = require("body-parser");

var mw =require("./middleware");

app.use("/", bodyParser.json(), mw.logTime, mw.terranCall);


app.use("/terran", require("./routes/terran-router"));

app.listen(port, function (){
    console.log("Listening on port" + port);
});