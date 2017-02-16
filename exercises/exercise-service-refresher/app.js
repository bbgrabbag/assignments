angular.module("myApp",[])

.controller ("mainCtrl", ["$scope", "characterService", function ($scope, characterService){
    
   $scope.submitChar = function(character){
        characterService.addCartoon(character);
       $scope.characters =characterService.retrieveCartoons(character);
       $scope.newCharacter = {};
   }
}]);