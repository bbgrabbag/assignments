module.exports.EnemyLocation = function () {
    this.isHit = false;
    this.isShipFunc = function () {
        var randNum = Math.floor((Math.random() * 7) + 1);
        if (randNum === 1) {
            return true;
        }
    };
    this.isShip = this.isShipFunc();

    this.displayFunc = function () {
        if (this.isHit) {
            if (this.isShip) {
                return "X";
            } else if (!this.isShip) {
                return "M";
            };

        } else if (!this.isHit) {
            if (!this.isShip) {
                return "~";
            } else if (this.isShip){
                return "~";
            }
        }
    };
    this.display = this.displayFunc();
};