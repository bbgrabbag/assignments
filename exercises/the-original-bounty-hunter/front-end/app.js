angular.module("serverApp", []);

angular.module("serverApp")

.controller("mainCtrl", ["$scope", "bountyService", "httpservice", function ($scope, bountyService, httpservice) {
    httpservice.getAllReq("http://localhost:8000/bounties")
        .then(function (gotten) {
            $scope.showBounties = bountyService.bounties;
        });

    $scope.postBounty = function (bounty) {
       return httpservice.postReq(bounty, "http://localhost:8000/bounties")
            .then(function (response) {
                $scope.showBounties = bountyService.bounties;

            });
    };

    $scope.editBounty = function (id,bounty) {
        return httpservice.putReq(bounty, "http://localhost:8000/bounties/" + id)
            .then(function (response) {
                $scope.showBounties = bountyService.bounties;
            });
$scope.bounty = {};
    };
    $scope.deleteBounty = function (id){
        return httpservice.deleteReq("http://localhost:8000/bounties/" + id)
        .then(function (response) {
                $scope.showBounties = bountyService.bounties;
            });
    }

}]);