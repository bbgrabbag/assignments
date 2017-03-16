angular.module("portfolioApp")
    .controller("modalCtrl", ["$scope",
        "$uibModal",
        function ($scope, $uibModal) {
            $scope.openModal = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: "myModalContent.html",
                    scope: $scope,
                    size: "lg"
                });
            }
}]);