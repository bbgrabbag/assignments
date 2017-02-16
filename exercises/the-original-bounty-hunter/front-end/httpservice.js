angular.module("serverApp")

.service("httpservice", ["$http", function($http){
    this.postReq = function (bounty, url){
        return $http.post(url, bounty);
    }
}]);