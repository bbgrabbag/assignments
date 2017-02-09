angular.module("myApp", [])
    .controller("mainCtrl", ["httpService", "$scope", function (httpService, $scope) {

            httpService.getRequest()
            .then(function(hitList){
                $scope.hitList = hitList;
            });

}
               ]);