angular.module("myApp")
    .service("pokeService", function (){
    var pokeList = [];
    this.addNewPokemon = function(item){
        pokeList.push (item);
        return pokeList;
        
    };
    this.deleteNewPokemon = function(item){
        pokeList.splice(pokeList.indexOf(item));
        return pokeList;
    };
});