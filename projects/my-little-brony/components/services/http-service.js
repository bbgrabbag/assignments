angular.module("bronyApp")
    .service("httpService", function ($http, ponyService) {
        this.addPony = function (url, pony) {
            return $http.post(url, pony)
                .then(function (posted) {
                    console.log(posted.data);
                    ponyService.ponies.push(posted.data);
                }, function (posted) {
                    console.log(posted.data)
                });
        };

        this.getPonies = function (url) {
            return $http.get(url)
                .then(function (gotten) {
                    console.log(gotten.data);
                    ponyService.ponies = gotten.data;
                }, function (gotten) {
                    console.log(gotten.data);
                });
        };

        this.editPony = function (url, pony) {
            pony.name = pony.edittedName;
            pony.imgUrl = pony.edittedImgUrl;
            return $http.put(url, pony)
                .then(function (beenPut) {
                    console.log(beenPut.data);
                    ponyService.ponies[pony._id] = beenPut.data;
                }, function (beenPut) {
                    console.log(beenPut.data)
                });
        };
    
    this.deletePony = function(url, id){
       return $http.delete(url)
        .then(function(deleted){
            console.log(deleted.data);
            for(var i = 0; i < ponyService.ponies.length; i++){
                if (ponyService.ponies[i]._id === id){
                    ponyService.ponies.splice(i, 1);
                }
            }
            
        }, function (deleted){
            console.log(deleted.data);
        });
    }
    });