var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var essaySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
});