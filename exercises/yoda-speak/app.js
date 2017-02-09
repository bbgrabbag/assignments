angular.module("yodaApp", [])
.controller("yodaCtrl", ["$scope", "$http", "httpService", function ($scope, $http, httpService){
                         
                              
    $scope.yodafy = function (phrase){
        $scope.results = "Loading...";
        httpService.getRequest(phrase).then (function(request){$scope.results = request});
    }
}]);