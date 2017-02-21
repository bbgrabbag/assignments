angular.module("myApp")

    .controller("homeCtrl", ["$scope","httpService", function($scope, httpService){
        $scope.addNewCause = function (newIssue){
            
            httpService.addNewCause(newIssue, "http://localhost:8000/issues");
                $scope.newIssue = {};
            
        }
    } 
]);