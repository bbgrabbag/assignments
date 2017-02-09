angular.module("myApp")
    .service("httpService", ["$http", function ($http) {

        this.getRequest = function () {
            return $http.get("http://api.vschool.io:6543/hitlist.json")
                .then(function (response) {
                    return response.data;
                }, function (response){
                return "There was an error. Status:" + response.status;
            });
        }
}]);