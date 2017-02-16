var enemyGrid = require("./enemy-grid");
var enemyLocation = require("./enemy-location");
var playerGrid = require("./player-grid");
var playerLocation = require("./player-location");
var app = require("./app");

module.exports.gameEnemySetup = function () {
    //create grids for each player
    var enemy = new enemyGrid.enemyGridConst("Enemy");

    enemy.addLocation();

    console.log("\n" +enemy.caption + "\n");
    console.log(enemy.displayGrid());

};
module.exports.gamePlayerSetup = function () {

    var player = new playerGrid.playerGridConst("Player");

    player.addLocation();
    
    console.log("\n" + player.caption + "\n");
    console.log(player.displayGrid());
};

module.exports.BattleShipConst = function (cells){
    this.cells = cells;
    this.hitPoints = cells;
}

module.exports.battleshipInventory = [];

//next is ship locator function:
module.exports.shipLocator = function(shipLength, shipDirection, rowCoord, colCoord){
    
};