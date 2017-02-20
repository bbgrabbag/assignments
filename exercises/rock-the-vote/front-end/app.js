angular.module("myApp", []);
angular.module("myApp")
.controller("mainCtrl", ["$scope","httpService", function ($scope, httpService){
    httpService.loadIssues("http://localhost:8000/issues")
        .then(function(loaded){
        $scope.issues = httpService.issues;
    });
}]);