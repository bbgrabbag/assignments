angular.module("myApp", [])
    .controller("mainCtrl", ["$scope", "httpService", function ($scope, httpService) {

        httpService.getRequest("http://api.vschool.io/benturner/todo").then(function (gotten) {
                $scope.todos = gotten.data;
            },
            function (gotten) {
                console.log("There was an error: " + gotten.status + " " + gotten.statusText);
            });

        $scope.submitList = function (submitData) {
            httpService.postRequest("http://api.vschool.io/benturner/todo/", submitData).then(

                function (posted) {
                    httpService.getRequest("http://api.vschool.io/benturner/todo/").then(

                        function (gotten) {
                            $scope.todos = gotten.data
                            $scope.newTodo = {};
                            $scope.todo.title.$pristine = true;
                            $scope.todo.description.$pristine = true;
                        },
                        function (gotten) {
                            console.log("There was an error: " + gotten.status + " " + gotten.statusText);
                        }
                    )
                },

                function (posted) {
                    console.log("There was an error: " + posted.status + " " + posted.statusText);
                }
            )
        };

        $scope.deleteItem = function (item, $index) {
            httpService.deleteRequest("http://api.vschool.io/benturner/todo/" + item._id).then(function (deleted) {
                    $scope.todos.splice($index, 1);
                },
                function (deleted) {
                    console.log("There was an error: " + response.status + " " + response.statusText)
                })
        }
    }]);