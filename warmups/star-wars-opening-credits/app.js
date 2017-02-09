var app = angular.module ("myApp", []);
app.controller ("mainCtrl", function ($scope, $http){
    $scope.openingCrawl = "";
    $http.get("http://swapi.co/api/films/1/").then (function (response){
        $scope.openingCrawl = response.data.opening_crawl;
    });

});