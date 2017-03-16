angular.module("portfolioApp")
.controller("headerCtrl", ["$scope", "$timeout", function($scope, $timeout){
    $timeout(function(){
        $scope.onLoad= true;
    });
}]);
