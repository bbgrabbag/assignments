angular.module("bronyApp")
.controller("homeCtrl", ["$scope", "ponyService", "httpService", function($scope, ponyService, httpService){
    $scope.addPony = function(pony){
        if(ponyService.ponyValidator(pony)){
            //follow through with http request
          httpService.addPony("http://api.vschool.io/benturner/pony", pony);
            
        } else{
            alert("Invalid Entry!\nAll fields are required.\nPony name must be at least 3 characters long and contain only letters")
        }
        $scope.newPony = {};
    };
    
    
}]);