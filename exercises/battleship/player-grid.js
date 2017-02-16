var playerLocation = require ("./player-location");

module.exports.playerGridConst = function (name) {

    this.caption = name;

    this.displayGrid = function () {
        var newGrid = [];
        for (var i = 0; i < 10; i++) {
            newGrid.push([]);
            for (var j = 0; j < 10; j++) {
                newGrid[i].push(this.grid[i][j].display);
            }
        }
        return newGrid;
    }

    this.grid = [];

    this.addLocation = function () {
        for (var i = 0; i < 10; i++) {
            this.grid.push([]);
            for (var j = 0; j < 10; j++) {
                var locationProperties = new playerLocation.PlayerLocation;
                this.grid[i].push(locationProperties);
            }
        }
    }
};