angular.module("portfolioApp", ["ui.bootstrap", "ngRoute", "ngAnimate"]);
angular.module("portfolioApp")
.config(function($routeProvider){
    $routeProvider
    .when("/about-me", {
        templateUrl: "/templates/about-me.html" 
    })
    .when("/resume", {
        templateUrl: "./templates/resume.html"
    })
    .when("/projects", {
        templateUrl: "./templates/projects.html"
    })
    .otherwise("/", {
        redirectTo: "./templates.about-me.html"
    });
});

    
