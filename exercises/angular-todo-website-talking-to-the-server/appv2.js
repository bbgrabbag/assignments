angular.module("myApp", [])
.controller("mainCtrl", ["$scope", "httpService", function ($scope, httpService) {
    
        $scope.todos = httpService.getRequest();


    $scope.submitList = function (){
        $scope.todos = httpService.postRequest($scope.newTodos).then(
        function(){
            return httpService.getRequest($scope.newTodos).then(function (response){
               $scope.newTodo = {};
        $scope.todo.title.$pristine = true;
            $scope.todo.description.$pristine = true 
            })
            })
    }

       
    $scope.deleteItem = function (item, $index) {
        
        $http.delete("http://api.vschool.io/benturner/todo/" + item._id).then(function (response) {
            $scope.todos.splice($index, 1);
        },
            function(response){
            console.log ("There was an error: " + response.status + " " + response.statusText)
        }

)}]);