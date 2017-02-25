var express = require("express");
var bountyRouter = express.Router();
var Bounty = require("./bounty-models");

bountyRouter.route("/")
.get(function(req,res){
    Bounty.find({}, function(err, bounties){
        res.status(200).send(bounties);
    });
})
.post(function(req,res){
    var newBounty = new Bounty(req.body);
    newBounty.save(function(err, new_bounty){
        res.status(200).send(new_bounty);
    });
});

bountyRouter.route("/:id")
.get(function(req,res){
    Bounty.findOne({_id: req.params.id}, function(err, bounty){
        res.status(200).send(bounty);
    });
})
.put(function(req,res){
    Bounty.findOne({_id: req.params.id}, function(err, bounty){
        bounty.reward = req.body.reward;
        bounty.name = req.body.name;
        bounty.type = req.body.type;
        bounty.save(function(err, new_bounty){
            res.send(new_bounty);
        });
    });
})
.delete(function(req,res){
    Bounty.findOne({_id:req.params.id}, function(err, bounty){
        bounty.remove(function(err){
            res.send("delete successful")
        });
    });
});


module.exports = bountyRouter;