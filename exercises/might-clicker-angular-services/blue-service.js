angular.module("myApp")

.service("blueService", function(){
    
    this.increment =function (number){
        return (number +1);
    };
    this.decrement = function (number){
        return (number - 1);
    };
    this.reset = function(number){
        return 100
}});