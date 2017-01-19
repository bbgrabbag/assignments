var readline = require ("readline-sync");

function playerAttackPower(){
    return (Math.randomInt)
}

var PlayerStats = {
    playerName: "",
    hitPoints: 100,
    attackPower: playerAttackPower;
    items: ["machine gun"]
}

function enemyChoices(){
        var choices = ["Drone", "Zergling", "Broodling"];
        return choices.indexOf(Math.floor(Math.random * choices.length));
    
function hitPoints(name){
        if(name === "Drone"){
            return 25;
        } else if (name === "Zergling"){
            return 65;
        } else {
            return 45;
        }
}
    function hit

var Enemy = function(){
    this.enemyName = enemyChoices();
    this.enemyHitPoints = hitPoints(this.name);
    this.enemyAttackPower = number;
}

console.log("You are a Terran Marine who has been given a mission to scout the enemy zerg location. \nYou have left the main command center and are en route to the following coordinates: 35, 64.\nYour radio suddenly explodes in a fit of static. A strange human-like sound erupts from the speakers, nearly deafening you. \nYou look around, making sure there are no signs of zerg anywhere.\n");
var mysteryVoice = "Mystery Voice: "
var playerName = readline.question(mysteryVoice + "What is your name?\n");
console.log("Your leaders have not told you how much danger you face out here.\nYou must hurry.\n");
var beginWalk = readline.keyIn("press 'w' to begin walking\n", {limit: 'w'});
beginWalk = true;

//check if beginWalk is true. 
//if so, run a function which determines if an enemy appears.
//if an enemy doesnt appear, repeat beginWalk keyIn.

//if an enemy appears, run a function which determines which enemy appears (zergling, drone, or broodling)
//keyinYN prompt the user to run or fight.
//if user runs, run function which determines a 50% of escape. 
    //if escapes then display a message which says "you managed to run away and hide! + mystery voice + "There is no time to linger much longer. You must move forward."
        //Repeat beingWalk prompt.
    //if no escape, then display message that says "theres nowhere to run! you must fight!" then run fight protocol

//if user fights, run a function which determines random attack power between 50 and 100.
//then run a function which deals damage to enemy HP.
//run a function which deals damage to you from the enemy.



