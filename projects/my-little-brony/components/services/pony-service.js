angular.module("bronyApp")
.service("ponyService", function(){
    var ponies =[];
    
    this.ponyValidator = function(pony){
        return pony.hasOwnProperty("name") &&
            pony.hasOwnProperty("username") &&
            pony.hasOwnProperty("imgUrl") &&
            pony.name.length > 3 &&
            !/\d/.test(pony.name);
    };
});