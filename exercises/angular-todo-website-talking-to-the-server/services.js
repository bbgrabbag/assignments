angular.module("myApp")

.service("httpService", ["$http", function ($http) {

                this.getRequest = function (url) {
                    return $http.get(url);
                };

                this.postRequest = function (url, toPost) {
                    return $http.post(url, toPost);
                };


                this.deleteRequest = function (urlId) {

                    return $http.delete(urlId);
                };
}]);                                                                          