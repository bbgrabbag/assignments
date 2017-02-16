angular.module ("wishList",["ngRoute"])

.config(["$routeProvider", function ($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "/ng-view/home.html",
        controller: "HomeController"
    }).when("/tech-list", {
        templateUrl: "/ng-view/tech.html",
        controller: "TechController"
    }).when("/travel-list", {
        templateUrl: "/ng-view/travel.html",
        controller: "TravelController"
    }).otherwise({
        redirectTo: "/home"
    });
}]);