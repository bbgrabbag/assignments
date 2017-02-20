angular.module("serverApp")

.service("httpservice", ["$http", "bountyService", function ($http, bountyService) {

    this.postReq = function (bounty, url) {
        return $http.post(url, bounty)
            .then(function (posted) {
                return $http.get(url)
                    .then(function (gotten) {
                        bountyService.bounties = gotten.data;
                    });
            });
    };
    this.getAllReq = function (url) {
        return $http.get(url)
            .then(function (gotten) {
                bountyService.bounties = gotten.data;
            });
    };
    this.putReq = function (bounty, url) {
        return $http.put(url, bounty)
            .then(function (put) {
                return $http.get("http://localhost:8000/bounties")
                    .then(function (gotten) {
                        bountyService.bounties = gotten.data;
                    });
            });
    };
    this.deleteReq = function(url){
        return $http.delete(url)
        .then(function(deleted){
        return $http.get("http://localhost:8000/bounties")
                    .then(function (gotten) {
                        bountyService.bounties = gotten.data;
                    });
        })
    }

                        }]);