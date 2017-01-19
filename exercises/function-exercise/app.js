//function addSum(x,y){
//    return Number(x) + Number(y);
//}
//console.log(addSum(2,4));

//function largestNumber(x,y,z){
//    var numberList = [x, y, z];
//    var largeNumber = 0;
//    for(var i = 0; i < 3; i++){
//        if(numberList[i] > largeNumber){
//            largeNumber = numberList[i];
//        }
//    }   console.log (largeNumber);
//}        

function evenOrOdd(number){
    if(number % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}
console.log (evenOrOdd(1));
