angular.module("serverApp", []);

angular.module("serverApp")

.controller("postCtrl", ["$scope", "httpservice", function ($scope, httpservice) {
$scope.test = "test";
    $scope.postBounty = function (name, reward, type) {
        httpservice.postReq($scope.newBounty, "http://localhost:8000/bounties")
            .then(function (posted) {
                alert(`You've listed ${name} as a bounty! There is a ${reward}GCS reward for this ${type}. The ID for this listing is: ${posted.data}`);
            $scope.newBounty = {};
            }, function (posted) {
                alert("There was a problem listing your bounty!");
            $scope.newBounty = {};
            });
    };

}]);