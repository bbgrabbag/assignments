var dayTime = function (hour, meridian) {
    this.hour = hour;
    this.meridian = meridian;
    this.time = function () {
        console.log("It is currently", hour, meridian)
    }
}
var currentTime = new dayTime(5, "pm");
currentTime.time();

if (currentTime.hour <= 12 && currentTime.meridian === "am"){
    console.log("Good morning!");
}
if ((currentTime.hour <= 5|| currentTime.hour === 12) && currentTime.meridian === "pm"){
    console.log("Good afternoon!");
}
if (currentTime.hour > 5 && currentTime.hour < 12 && currentTime.meridian === "pm"){
    console.log("Good evening!");
}

