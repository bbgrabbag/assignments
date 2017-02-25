var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bounties");

var Schema = mongoose.Schema;
var bountySchema = new Schema({
    name: String,
    reward: Number,
    type: String
});

module.exports = mongoose.model("Bounty", bountySchema);

