//check whether a given character is upper case or lower case
//invert a character's casing within a string
//print the new string



function isCaps(letter){
    return letter === letter.toUpperCase();
}
//
//function antiCap (letter){
//    var output = "";
//    isCaps(letter);
//    if (isCaps) {
//        output += letter.toLowerCase();
//    } else {
//        output += letter.toUpperCase();
//    }
//    return output;
//}

function antiCap (string){
    var outputString = "";
    for (var i = 0; i < string.length; i++){
        if (isCaps(string[i])){
            outputString += string[i].toLowerCase();
        } else {
            outputString += string[i].toUpperCase();
        }
    }
    return outputString;
}

console.log (antiCap("BenJammin"));
