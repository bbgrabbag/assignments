angular.module("starcraftApp", ["ngRoute", "ui.bootstrap"]);

angular.module("starcraftApp")

.config(function ($routeProvider) {
        $routeProvider.when("/home", {
                templateUrl: "components/home/home.html"
            })
            .when("/profile-info", {
                templateUrl: "components/profile-info/profile-info.html"
            })
            .otherwise("/home");
    })
    .controller("menuBtn", function ($scope) {
        $scope.isCollapsed = true;
    })
    .controller("formCtrl", ["$scope", "httpService", "statService", function ($scope, httpService, statService) {
        $scope.submitted = false;
        $scope.submitForm = function (bnetId, bnetUserName) {
            httpService.getRequest("https://us.api.battle.net/sc2/profile/" + bnetId + "/1/" + bnetUserName + "/?locale=en_US&apikey=w4y2z7xamuwjgckdzwxtg4vrexhtz4z4")
                .then(function (gotten) {
                    console.log("success!");
                    $scope.submitted = true;
                    statService.storeStats(gotten);
                    statService.logIn();
                }, function (gotten) {
                    console.log("failure!");
                });
        }
    }])
    .controller("profileCtrl", ["$scope", "statService", function ($scope, statService) {
        $scope.isLoggedIn = false;
        
        var stat = statService.profileStats;
        console.log(stat);
        $scope.username = stat.displayName;
        $scope.id = stat.id;
        $scope.ladderRank = stat.career.highest1v1Rank;
        $scope.imgUrl = statService.getRankImg($scope.ladderRank);
        $scope.wins = stat.season.stats[0].wins;
        $scope.gamesPlayed = stat.season.stats[0].games;
        $scope.winRate = statService.calcWinRate($scope.wins, $scope.gamesPlayed);
        $scope.mainRace = stat.career.primaryRace;
        $scope.swarmLvl =stat.swarmLevels.terran.level;
}]);