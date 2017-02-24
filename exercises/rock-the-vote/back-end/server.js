var express = require("express");
var app = express();
var uuid = require("uuid");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/issues");

var bodyParser = require("body-parser");

app.use(bodyParser.json());

var path = require("path");
app.use(express.static(path.join(__dirname, "..", "front-end")));

var Schema = mongoose.Schema;

var issueSchema = new Schema({
    name: String,
    description: String,
    upvotes: Number,
    downvotes: Number,
    comments: [String]
});

var Issue = mongoose.model("Issue", issueSchema);

app.get("/issues", function (req, res) {

    Issue.find({}, function (err, issues) {
        return res.send(issues);
    });
});

app.get("/issues/:id", function (req, res) {

    Issue.findOne({id: req.param.id}, function (err, issue) {
        return res.send(issue);
    });
});

app.post("/issues", function (req, res) {

    var newIssue = new Issue(req.body);
    newIssue.save(function (err, new_issue) {
        return res.send(newIssue);
    });
});

app.put("/issues/:id", function (req, res) {
    Issue.findOne({id: req.param.id},{new: true}, function (err, issue) {
        issue.upvotes = req.body.upvotes;
        issue.downvotes = req.body.downvotes;
        issue.comments = req.body.comments;
        issue.save(function (err, new_issue) {
            return res.send(issue);
        });
    });
});

app.delete("/issues/:id", function (req, res) {
    
   Issue.findOne({id: req.param.id}, function (err, issue) {
        issue.remove(function(err){
            return res.send(console.log("item deleted"));
        });
    });
});



app.listen(8000, function () {
    console.log("Listening on port 8000")
});