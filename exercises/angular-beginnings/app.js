var app = angular.module("MyApp", []);
app.controller("mainCtrl", ["$scope", function ($scope) {
    $scope.person = {
        name: "Ben",
        age: 28
    }
    $scope.emotion = "happy";
    
    $scope.transactions = [{
        description: "Smith's",
        price: "40$"
    }, {
        description: "Sparkly Car Wash",
        price: "$3"
    }, {
        description: "Gamestop",
        price: "$50"
    }];

 }]);