var readline = require("readline-sync");

var PlayerStats = {
    playerName: "",
    hitPoints: 100,
    items: ["Machine Gun"]
}

function stats(name, hitPoints, items) {
    console.log("\nYour Stats: \n" + "Name: " + name + "\nHit Points: " + hitPoints + "\nItems: " + items)
}

function safeMode() {
    isWalking = true;
    while (isWalking) {
        doesEnemyAppear();
    }
}

var newEnemy = "";

function enemyName() {
    var choices = ["Drone", "Zergling", "Broodling"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function enemyHitPoints(name) {
    if (name === "Drone") {
        return 25;
    } else if (name === "Zergling") {
        return 65;
    } else {
        return 45;
    }
}

function enemyAttackPower() {
    return Math.floor((Math.random() * 30) + 30);
}


var Enemy = function () {
    this.enemyName = enemyName();
    this.enemyHitPoints = enemyHitPoints(this.enemyName);
    this.enemyAttackPower = enemyAttackPower();
}

function doesEnemyAppear() {
    if (isWalking) {
        var randomNumber = Math.floor((Math.random() * 3) + 1);
        if (randomNumber === 1) {
            newEnemy = new Enemy();
            console.log("\nWatch out! A " + newEnemy.enemyName + " has appeared!\nStats:\nHit Points: " + newEnemy.enemyHitPoints + "\nAttack Power: " + newEnemy.enemyAttackPower + "\n");
            isWalking = false;
        } else {
            var beginWalk = readline.keyIn("\nYou're tired, you'd better rest. Keep your eyes peeled for Zerg.\nWhen you're ready to move press 'w' to begin walking\n", {
                limit: 'w'
            });
        }
    }
}

function run() {
    var chances = Math.floor(Math.random() * 2);
    if (chances === 1) {
        console.log("\nYou barely escaped! But not without taking " + newEnemy.enemyAttackPower + " damage!");
        PlayerStats.hitPoints = PlayerStats.hitPoints - newEnemy.enemyAttackPower;
        if (PlayerStats.hitPoints <= 0) {
            playerAlive = false;
        } else {
            var print = readline.question("Type 'print' to see your stats");
            if (print === "print") {
                stats(PlayerStats.playerName, PlayerStats.hitPoints, PlayerStats.items);
            }
            var beginWalk = readline.keyIn("\nWhen you're ready to move press 'w' to begin walking\n", {
                limit: 'w'
            });
            safeMode();
        }
    } else {
        console.log("\n" + mysteryVoice + "\nThere's no escape, you must stand your ground!");
        fight();
    }
}

function earnedItem() {
    var earnedItems = [" Widow Mine", " Flamethrower", " Sniper Rifle"];
    return earnedItems[Math.floor(Math.random() * earnedItems.length)];
}

function fight() {
    var enemyAlive = true;
    while (playerAlive && enemyAlive) {
        var playerAttackPower = Math.floor((Math.random() * 20) + 25);
        console.log("\nYou both attack!\nYou deal " + playerAttackPower + " damage to the enemy!\nThe " + newEnemy.enemyName + " does " + newEnemy.enemyAttackPower + " damage to you!\n");
        newEnemy.enemyHitPoints = newEnemy.enemyHitPoints - playerAttackPower;
        PlayerStats.hitPoints = PlayerStats.hitPoints - newEnemy.enemyAttackPower;
        console.log("\nEnemy HP: " + newEnemy.enemyHitPoints);
        console.log("\nYour HP: " + PlayerStats.hitPoints);
        if (PlayerStats.hitPoints <= 0) {
            playerAlive = false;
            break;
        }
        if (newEnemy.enemyHitPoints <= 0) {
            enemyAlive = false;
        }
    }
    if (!enemyAlive && playerAlive) {
        console.log("\nYou killed the " + newEnemy.enemyName + "!\n");
        PlayerStats.hitPoints += 75;
        PlayerStats.items.push(earnedItem());
        var print = readline.question("\nYou gained 75 HP and earned a " + PlayerStats.items[PlayerStats.items.length - 1] + "!" + "\nType 'print' to see your new stats! \n");
        if (print === "print") {
            stats(PlayerStats.playerName, PlayerStats.hitPoints, PlayerStats.items)
        }
        if (PlayerStats.hitPoints >= 200) {
            playerWin = true;
        }
    }
    isWalking = true; 
}


function loseGame() {
    console.log("You have less than 0 HP! You got pwned!");
}

function winGame() {
    console.log("\nYou reached 200 HP! You are a now a God among men.");
}

console.log("\nYou are a Terran Marine who has been given a mission to scout the enemy zerg location. \nYou have left the main command center and are en route to the following coordinates: 35, 64.\nYour radio suddenly explodes in a fit of static. A strange human-like sound erupts from the speaker, nearly deafening you. \nYou look around, making sure there are no signs of zerg anywhere.\n");
var mysteryVoice = "Mystery Voice: "
PlayerStats.playerName = readline.question(mysteryVoice + "What is your name?\n");
var print = readline.question("\nYou can access your stats by entering 'print' into the console. Good luck!");
if (print === "print") {
    stats(PlayerStats.playerName, PlayerStats.hitPoints, PlayerStats.items);
}
console.log("\n" + mysteryVoice + "Your leaders have not told you how much danger you face out here.\nYou must hurry.\n");
var beginWalk = readline.keyIn("press 'w' to begin walking\n", {
    limit: 'w'
});
var playerWin = false; 
var isWalking = true;
var playerAlive = true;
while (isWalking && playerAlive && !playerWin) {
    doesEnemyAppear();
    while (!isWalking) {
        var isFighting = readline.keyInYN(mysteryVoice + "\nWill you fight?\n");
        if (isFighting) {
            fight();
        } else {
            isWalking = true
            run();
        }
    }
}
if (playerWin && playerAlive) {
    winGame();
} else {
    loseGame();
}