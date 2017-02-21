angular.module("myApp", ["ngRoute"]);
angular.module("myApp")

.config(function($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "pages/home.html",
        controller: "homeCtrl"
    })
    .when("/causes", {
        templateUrl: "pages/causes.html",
        controller: "causesCtrl"
    })
    .otherwise({
        templateUrl:"pages/home.html",
        controller: "homeCtrl"
    })
});
