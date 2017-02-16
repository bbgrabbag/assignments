
var readline = require("readline-sync");
var enemyGrid = require("./enemy-grid");
var enemyLocation = require("./enemy-location");
var playerGrid = require("./player-grid");
var playerLocation = require("./player-location");
var helper = require("./helper");
var prompt = require ("./prompts");

console.log("\n==========================Welcome to Battleship.Node.JS! Brought to you by Turner Enterprise Games==========================\n");

prompt.intro;

helper.gameEnemySetup();
helper.gamePlayerSetup();

console.log("\nYou get Five (5) ships to place wherever you choose. Choose wisely!!\n");

prompt.chooseBattleShip ();

//choose starting coordinate
    //depending on the # of cells, the valid coordinates must correlate with the ship length
//NEXT: choose which direction.


//choose coordinates