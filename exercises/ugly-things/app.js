var app = angular.module("myApp",[]);
app.controller("mainCtrl", function ($scope){
    $scope.post =[];
$scope.submit = function(){
    $scope.post.push($scope.newPost);
    $scope.newPost = {};
}

});