angular.module("bronyApp")
.controller("favCtrl", ["$scope","httpService", "ponyService", function($scope, httpService, ponyService){
    httpService.getPonies("http://api.vschool.io/benturner/pony")
    .then(function(gotten){
        $scope.ponies = ponyService.ponies;
    });
}]);