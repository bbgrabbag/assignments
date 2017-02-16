angular.module("wishList")

.directive("itemList", [function () {
    return {
        templateUrl: "directive.html",
        scope: {
            item: "=",
        },
        restrict: "E"
    };
}]);