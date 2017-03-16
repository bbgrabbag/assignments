var express = require("express");
var personRoutes = express.Router();

var Person = require("../models/person");

personRoutes.get("/", function (req, res) {
    Person.find(function (err, people) {
        if (err) return res.status(500).send(err);
        res.send(people)
    });
});
personRoutes.get("/:id", function (req, res) {
    var populate = req.query.populate;
    var query = Person.findById(req.params.id);
    if(populate){
        query.populate("carsOwned")
    };
        query.exec(
            function (err, person) {
                if (err) return res.status(500).send(err);
                res.send(person)
            });
});
personRoutes.post("/", function (req, res) {
    var person = new Person(req.body);
    person.save(function (err, person) {
        if (err) return res.status(500).send(err);
        res.status(201).send(person);
    });
});

personRoutes.put("/:id", function (req, res) {
    Person.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, person) {
        if (err) return res.status(500).send(err);
        res.send(person);
    });
});

personRoutes.delete("/:id", function (req, res) {
    Person.findByIdAndRemove(req.params.id, function (err, person) {
        if (err) return res.status(500).send(err);
        res.send(person)
    });
});

module.exports = personRoutes;