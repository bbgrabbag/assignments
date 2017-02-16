module.exports.PlayerLocation = function () {
    this.isHit = false;
    this.isShip = false;
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
                return "S";
            }
        }
    };
    this.display = this.displayFunc();
};