angular.module("bronyApp")
    .controller("favCtrl", ["$scope", "httpService", "ponyService", function ($scope, httpService, ponyService) {
        httpService.getPonies("http://api.vschool.io/benturner/pony")
            .then(function (gotten) {
                $scope.ponies = ponyService.ponies;
            });
        $scope.editPony = function (pony) {
            if (pony.edittedName !== undefined &&
                pony.edittedImgUrl !== undefined) {
                httpService.editPony("http://api.vschool.io/benturner/pony/" + pony._id, pony)
                    .then(function (beenEditted) {
                        $scope.ponies = ponyService.ponies;
                    });
                console.log("added changes");
            } else if (!pony.editting) {
                console.log("editting");
            } else {
                console.log("No changes made");
            }
        };
        
        $scope.deletePony = function(id){
            httpService.deletePony("http://api.vschool.io/benturner/pony/" + id, id)
            .then(function(deleted){
                $scope.ponies = ponyService.ponies;
            });
        }
        
}]);