var player = {
    name: String,
    totalCoins: 0,
    status: "Small",
    star: false,
    setName: function (namePicked) {
        this.name(namePicked);
    },
    gotHit: function () {
        if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        } else if (this.status === "Big") {
            this.status = "Small";
        } else {
            this.status = "Big";
        }
    },
    gotPowerUp: function () {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status = "Powered Up"){
            this.star = true;
        }
        }
    ,
    gameActive: true,
    addCoin: function () {
        this.totalCoins += 1;
    },
    print: function () {
        console.log(`\nName: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\nStar: ${this.star}`)
    }
}

var generator = function () {
    return Math.floor(Math.random() * 3);
}
var playGame = function(){
    if (player.gameActive) {
        var number = generator();
        if (number === 0) {
            player.gotHit();
            console.log ("\nYou got hit!\n");
        } else if (number === 1) {
            player.gotPowerUp();
            console.log ("\nYou powered up!\n");
        } else {
            player.addCoin();
            console.log("\nYou earned a coin!");
        }
        player.print();
    }
}
playGame();
