angular.module("starcraftApp")

.service("statService", function (){
    this.logIn = function (){
        return true;
    }
    this.profileStats ={};
    this.storeStats = function(stats) {
        this.profileStats = stats.data;
    };
    this.calcWinRate = function (wins, played){
        return (wins/played).toFixed(2);
    };
    this.getRankImg = function (rank){
        if (rank === "DIAMOND"){
            return "http://pre05.deviantart.net/d43c/th/pre/i/2011/222/2/c/diamond_league_icon_by_corydbhs15-d464sdf.png";
        };
    };
});