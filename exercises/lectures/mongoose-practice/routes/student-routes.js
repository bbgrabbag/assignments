var express = require("express");
var router = express.Router();
var Student = require ("./../models/students");

router.route("/")
.get(function(req,res){
    Student.find(function(err, students){
        if (err) return res.status(500).send(err);
        res.send(students);
    });
})
.post(function(req,res){
    var newStudent = new Student(req.body);
    
    newStudent.save(function(err){
        if(err) return res.status(500).send(err);
        res.send(student)
    });
});

module.exports = router;