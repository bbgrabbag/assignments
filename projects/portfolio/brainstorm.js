//generate a random character.
//generate a random duration.
//add it to a string at that rate.
//when a string becomes a certain length, reset.

var matrixString = "";

var randChar = function (){
    var num =(Math.random());  
    if (num <.4){
        return 0
    } else if (num >=.4 && num<.9) {
        return 1
    } else {
        return " ";
    }
};

var randTempo = function (){
    var tempNum =Math.random();  
    if (tempNum <.2){
        return 300
    } else if(tempNum >= .2 && tempNum<.4){
       return 600
    }else if(tempNum >= .4 && tempNum<.6){
       return 8000
    }else if(tempNum >= .6 && tempNum<.8){
       return 1200
    }else{
        return 1600
    }
};

var stringGrower = function(randChar, randTempo, string){
    setInterval(function(){
        var newString =string.concat(randChar());
        string = newString;
        console.log(string)
    }, randTempo());
}

stringGrower(randChar, randTempo, matrixString);

var matrix = {
    row1: 
    row2:
    row3:
    row4:
    row5:
    row6:
    row7:
    row8:
    row9:
    row10:
}
