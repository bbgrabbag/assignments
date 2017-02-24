var express = require("express");
var mw = express();

module.exports.isValidEntry = function(entry){
    
    var todoProperties = ["name", "description", "imageUrl", "completed"];
    //check if the entry has properties that match every item in this array
    var validEntry = false;
    for(var i = 0; i < todoProperties.length; i++){
        if (!entry.hasOwnProperty(todoProperties[i])){
            return false;
        } else {
            validEntry = true;
        }
    };
    if (validEntry = true){
        return true;
    };
};