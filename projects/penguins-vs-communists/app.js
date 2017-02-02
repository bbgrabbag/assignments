function Faction(name) {
    this.name = name;
    this.population = 1000000;
}

var communists = new Faction("Communists");
var penguins = new Faction("Penguins");

console.log(`Welcome to ${communists.name} vs ${penguins.name}`);

isActive = true;

var gameInterval = setInterval(function (){
    
    var coinFlip = function () {
        var coin = Math.random();
        if (coin <= .5) {
            console.log("The penguins have attacked!");
            sendNuke(communists, onHit, onMiss);
        } else {
            console.log("The communists have attacked!");
            sendNuke(penguins, onHit, onMiss);
        }
    }
    coinFlip();
}, 1500);



function onHit(party) {
    var damage = Math.floor((Math.random() * 100000) + 100000);
    party.population = party.population - damage;
    if (party.population <= 0) {
        if (party === communists) {
            console.log(`The ${communists.name} have taken a mortal blow! The ${penguins.name} are free at last!`);
            clearInterval(gameInterval);
        } else {
            console.log(`The ${penguins.name} have taken a mortal blow! The ${communists.name} will Make Antarctica Great Again!`);
           clearInterval(gameInterval);
        }
    } else {
        console.log(`${party.name} were hit! Their population is now ${party.population}!`);
    }
}

function onMiss(party) {
    console.log(`${party.name} were spared! It was merely a dud!`);
}

function sendNuke(party, onHit, onMiss) {
    var attack = Math.random();
    if (party === communists) {
        if (attack <= 0.5) {
            onHit(communists);
        } else {
            onMiss(communists);
        }
    }else {
        if (attack <= 0.5) {
            onHit(penguins);
        } else {
            onMiss(penguins);
        }
    }

}