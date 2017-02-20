var express = require("express");
var mw = express();

module.exports.logTime = function(req,res,next){
    req.logTime = Date.now();
    next();
}

module.exports.terranCall = function(req,res,next){
    req.terranCall = "Hell...it's about time.";
    next();
}