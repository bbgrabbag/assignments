angular.module("bronyApp")
.service("httpService", function($http, ponyService){
    this.addPony = function(url, pony){
        return $http.post(url, pony)
        .then(function(posted){
            console.log(posted.data);
            ponyService.ponies.push(posted.data);
        }, function(posted){
            console.log(posted.data)
        });
    };
    
    this.getPonies = function (url){
        return $http.get(url)
        .then(function(gotten){
            console.log(gotten.data);
            ponyService.ponies = gotten.data;
        }, function(gotten){
            console.log(gotten.data);
        });
    }
});