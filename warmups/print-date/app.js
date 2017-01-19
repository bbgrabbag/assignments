function date(){
    var day = new Date();
    var today = day.getDay();
    var names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    console.log ("Today is: " + names[today]);
    var time = day.toLocaleTimeString();
    console.log ("Time is: " + time);
}
date();