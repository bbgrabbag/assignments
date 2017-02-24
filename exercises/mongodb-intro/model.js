var express = require("express");
model = express();

var mongoose = require("mongoose");

var racecarSchema= new mongoose.Schema({
    name: String,
    make: {
        type: String,
        required: true
    },
    model: String,
    year: Number,
    streetLegal: Boolean,
    sponsorStickers: [String],
    
});

var RaceCar = mongoose.model("RaceCar", racecarSchema);
var myCar = new RaceCar(
{make: "Ferrari",
model: "La Ferrari",
year: "2017"});

