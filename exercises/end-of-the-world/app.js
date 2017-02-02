//set hours, minutes, seconds and convert to mill
//convert current time to milliseconds
//add that total to the time right now
//create function that subtracts future time from now and prints it to index.html in the form of hours, minutes, seconds
//set interval to call that function every 1 second.
//clear interval once function returns zero
//add message to "alert" element
var setHour = 1;
var setMinute = 30;
var setSecond = 00;

var convertToMilli = function (hour, minute, second) {
    return (hour * 1000 * 60 * 60) + (minute * 1000 * 60) + (second * 1000);
}
var futureMilli = convertToMilli(setHour, setMinute, setSecond);

var today = new Date;
var nowMilli = today.getMilliseconds();
var totalMilli = nowMilli + futureMilli;

var setCount = function () {
    var now = new Date;
    convertToTime(totalMilli - now.getMilliseconds());
}

var countdown = function () {
    setInterval(setCount, 1000);
}
countdown();

function convertToTime (millisec){
    var hour = (millisec / (1000 * 60 * 60)).toFixed(0);
    var minute = ((millisec % (1000 * 60 * 60))/(1000 * 60)).toFixed(0);
    var second = ((millisec % (1000 * 60))/1000).toFixed(0);
    console.log(`${hour} : ${minute} : ${second}`);
}



//var setHour = 1;
//var setMinute = 3;
//var setSecond = 0;
//
//var setMilli = convertToMilli (setHour, setMinute, setSecond);
//
////when setMill and nowMilli are added, their sum represents the final count.
//var finalCount = setMilli + nowMilli;
//
//function countdown (){
//    var lapsedTime = convertToMilli;
//    console.log(finalCount - today.getMilliseconds);
//}
//var timer = setInterval(countdown)