//any function that returns either a true or false can be used as a callback function within the filter method
function isEven(number){
    return number % 2 === 0;   
    }

//given the callback function, put each element of the array through it as an argument.
Array.prototype.myFilter = function(callback){
    var array = this;
    var filteredArray = [];
    for (var i =0; i < this.length; i++){
        if (callback(array[i])){
           filteredArray.push(this[i]);
        }   
    }
    return filteredArray;
}

var someArray = [4,3,4,8,10,6];
console.log(someArray.myFilter(isEven));

