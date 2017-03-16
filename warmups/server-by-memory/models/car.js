var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    engine: String,
    miles: Number,
    owners:[{
        type: Schema.Types.ObjectId,
        ref: "Person"
    }]
});

module.exports = mongoose.model("Car", carSchema);