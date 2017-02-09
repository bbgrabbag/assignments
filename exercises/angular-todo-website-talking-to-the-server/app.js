angular.module("myApp", [])
.controller("mainCtrl", ["$scope","httpService", function ($scope, httpService) {
    
    $http.get("http://api.vschool.io/benturner/todo").then(function (response) {
        $scope.todos = response.data;
    }, function(response){
        console.log("There was an error: " + response.status + " " + response.statusText);
    });

    $scope.submitList = function () {

        $http.post("http://api.vschool.io/benturner/todo/", $scope.newTodo).then(function(response){
        $http.get("http://api.vschool.io/benturner/todo").then(function (response) {
        $scope.todos = response.data;
                }, function(response){
        console.log("There was an error: " + response.status + " " + response.statusText);
    }).then(function(response){
            $scope.newTodo = {};
            $scope.todo.title.$pristine = true;
            $scope.todo.description.$pristine = true;
        })},
               function(response){
            console.log ("There was an error: " + response.status + " " + response.statusText);
            $scope.newTodo = {};
        }
    )};
    $scope.deleteItem = function (item, $index) {
        
        $http.delete("http://api.vschool.io/benturner/todo/" + item._id).then(function (response) {
            $scope.todos.splice($index, 1);
        },
            function(response){
            console.log ("There was an error: " + response.status + " " + response.statusText)
        }

)}}]);