var readline = require("readline-sync");
var helper = require("./helper");

module.exports.intro = readline.question("Press any button to begin!");


module.exports.chooseBattleShip = function () {

    var shipchoices = ["2-cell", "3-cell", "4-cell", "5-cell"];

    var i = 7;
    var twoCell = 2;
    var threeCell = 2;
    var fourCell = 2;
    var fiveCell = 1;
    
    var inventory = {
        twoCell: 0,
        threeCell: 0,
        fourCell: 0,
        fiveCell: 0
    };

    while (i > 0) {

        var choice = readline.keyInSelect(shipchoices, "\nChoose a ship!\nYou get two ships of each model except the 5-cell one. You only get one of those!\n");
        if (choice === 0) {
            if (twoCell > 0) {
                var newShip = new helper.BattleShipConst(2);
                helper.battleshipInventory.push(newShip);
                
                console.log("You added a 2-cell ship to your inventory!");
                inventory.twoCell += 1;
                twoCell = twoCell - 1;
                console.log(inventory);
                i = i - 1;   
            } else {
                console.log("You do not have any left!")
            }
        } else if (choice === 1) {
            if (threeCell > 0) {
                var newShip = new helper.BattleShipConst(3);
                helper.battleshipInventory.push(newShip);
                console.log("You added a 3-cell ship to your inventory!");
                inventory.threeCell += 1;
                threeCell = threeCell - 1;
                console.log(inventory);
                i = i - 1;
            } else {
                console.log("You do not have any left!")
            }
        } else if (choice === 2) {
                if (fourCell > 0) {
                var newShip = new helper.BattleShipConst(4);
                helper.battleshipInventory.push(newShip);
                console.log("You added a 4-cell ship to your inventory!");
                inventory.fourCell += 1;
                fourCell = fourCell - 1;
                console.log(inventory);
                i = i - 1;     
            } else {
                console.log("You do not have any left!")
            }
        } else if (choice === 3) {
            if (fiveCell > 0) {
                var newShip = new helper.BattleShipConst(5);
                helper.battleshipInventory.push(newShip);
                console.log("You added a 5-cell ship to your inventory!");
                inventory.fiveCell += 1;
                fiveCell = fiveCell - 1;
                console.log(inventory);
                i = i - 1;
            } else {
                console.log("You do not have any left!")
            }
        } else {
            console.log("Invalid!");
        }
    }
};