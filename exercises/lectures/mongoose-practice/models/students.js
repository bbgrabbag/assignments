var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    currentPassword: {
        type: String,
        required: true
    },
    pastPassword: [String],
    gpa: Number,
    grade: {
        type:String,
        enum:["Freshman", "Sophomore", "Junior", "Senior"],
        default: "Freshman"
    },
    courses: [String],
    essays: [String]
});

module.exports = mongoose.model("Student", studentSchema);