angular.module("bronyApp", ["ngRoute"]);
angular.module("bronyApp")
.config(function($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "./components/templates/home.html",
        controller: "homeCtrl"
    })
    .when("/favorites", {
        templateUrl: "./components/templates/favorites.html",
        controller: "favCtrl"
    })
    .otherwise("/", {
        redirectTo: "/home"
    });
});