angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider.when("/home", {
                templateUrl: "home/home.html",
                controller: "homeController"

            })
            .when("/about", {
                templateUrl: "about/about.html",
                controller: "aboutController"
            })

            .when("/why-i-love", {
                templateUrl: "why-i-love/why-i-love.html",
                controller: "whyiloveController"
            })
            .otherwise({
                redirectTo: "/home"
            });
});