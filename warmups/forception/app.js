var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]; 
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var alphabet = alphabet.toUpperCase();

var alphaPeople = [];
//we need to first go through the array, and set the first name to alphaPeople:

function forception(){
    for (i = 0; i < people.length; i++){
        alphaPeople.push(people[i] + ":");
        
        //within this loop we need to push to alphaPeople all the letters of alphabet
        for (a = 0; a < alphabet.length; a++){
            alphaPeople.push(alphabet[a]);
        }
    }
    console.log (alphaPeople);
}

forception();