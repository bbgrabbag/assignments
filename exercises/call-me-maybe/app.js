var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  

function dontCall(name){
    console.log ("You didn't call " + name);
}
function call(name){
    console.log("You called " + name);
}
function sendText(name){
    console.log ("You sent text to " + name);
}

function moreThanOneLetter(name){
    
}

function attemptCall(name, dontCall, call, sendText){
    if (name.length % 2 !== 0){
        dontCall;
    } else if (name.length % 2 === 0){
        call;
    } else if(//name has more than two of letter 'a'){
        sendText;
    }
}
    
    
    for(var i = 0; i < names.length; i++){
    attemptCall(names[i], sendText, dontCall, call);
        
}