angular.module("myApp")

.service("httpService", function($http){
    this.issues = [];
    
    this.loadIssues = function(url){
        return $http.get(url)
            .then(function(gotten){
            this.issues = gotten.data;
        })
    }
});