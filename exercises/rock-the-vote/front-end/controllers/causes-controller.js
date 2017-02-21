angular.module("myApp")

.controller("causesCtrl", ["$scope", "httpService", "issueDatabase", function ($scope, httpService, issueDatabase) {
    httpService.loadIssues("http://localhost:8000/issues")
        .then(function (loaded) {
            $scope.issues = issueDatabase.issues;
        });
    
    $scope.addUpvote = function(id, issue){
        httpService.addUpvote(id, issue, "http://localhost:8000/issues/" + id)
        .then(function(added){
            $scope.issues[issue.id] = issueDatabase.issues[issue.id]
        })
    };
  
    $scope.addDownvote = function(id, issue){
        httpService.addDownvote(id, issue, "http://localhost:8000/issues/" + id)
        .then(function(added){
            $scope.issues[issue.id] = issueDatabase.issues[issue.id]
        })
    };
    
    $scope.addComment = function(id, newcomment, issue){
        httpService.addComment(id, newcomment, issue, "http://localhost:8000/issues/" + id)
        .then(function(added){
            $scope.issues[issue.id] = issueDatabase.issues[issue.id];
        });
         
    };
    
    $scope.deleteIssue = function(id, issue){
        httpService.deleteIssue(id, issue, "http://localhost:8000/issues/" + id)
        .then(function(deleted){
            $scope.issues = issueDatabase.issues;
        });
    };
    
    
}]);