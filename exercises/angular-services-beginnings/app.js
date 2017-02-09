angular.module("myApp", [])
.controller("mainCtrl", ["$scope", "pokeService", function ($scope, pokeService) {
    $scope.pokeList = [];
    $scope.addNewPokemon = function(pokemonName){
        $scope.pokeList= pokeService.addNewPokemon(pokemonName);
        $scope.pokemonName = "";
    };
    $scope.deleteOldPokemon = function (rmvPokemon){
        $scope.pokeList = pokeService.deleteNewPokemon(rmvPokemon);
        $scope.rmvPokemon = "";
    }
}]);