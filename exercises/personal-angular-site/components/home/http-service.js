angular.module("starcraftApp")

.service("httpService", ["$http", function ($http) {
    this.getRequest = function (url) {
        return $http.get(url);
    }
}]);