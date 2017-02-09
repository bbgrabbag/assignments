var app = angular.module("myApp", []);

app.controller("mainCtrl", function ($scope, $http) {

    $scope.submitForm = function () {
        //check to make sure its valid
        if ($scope.validateForm) {
            $scope.badgeName = $scope.person.firstName;
            $scope.badgeLastName = $scope.person.lastName;
            $scope.badgeEmail = $scope.person.email;
            $scope.badgeBirthplace = $scope.person.birthplace;
            $scope.badgePhone = $scope.person.phone;
            $scope.badgeFavFood = $scope.person.favFood;
            $scope.badgeAboutMe = $scope.person.aboutMe;
        }
    }
});