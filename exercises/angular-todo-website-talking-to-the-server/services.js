angular.module("myApp")

.service("httpService", ["http", function ($http) {
    this.getRequest = function () {
        return $http.get("http://api.vschool.io/benturner/todo")
            .then(function (response) {
                    return response.data;
                },
                function (response) {
                    return "There was an error: " + response.status + " " + response.statusText;
                });
};

    
    
     this.postRequest = function (newTodo) {
$http.post("http://api.vschool.io/benturner/todo/", newTodo).then(function(response){
    console.log(response);
}, function (response){
    console.log("There was an error: " + response.status + " " + response.statusText);
})}
        
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
    )}
    
    
    
    
    



}]);