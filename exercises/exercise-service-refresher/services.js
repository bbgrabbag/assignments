angular.module ("myApp")

.service("characterService", function (){
    var allCartoons = [];
    this.addCartoon = function(character){
        allCartoons.push(character);
    }
    
    this.retrieveCartoons = function (character){
        return allCartoons;
    }
});