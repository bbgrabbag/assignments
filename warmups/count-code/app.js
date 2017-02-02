var testString = [];
alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alphabet.length; i++){
        testString.push("co" + alphabet[i] + "e");
    }

function countCode(string){
    checkString = "";
    var stringCount = "";
    for (var i = 0; i < string.length; i++){
        if (string[i] === "c"){
            checkString = string[i] + string [i + 1] + string[i + 2] + string[i + 3];
            if (testString.indexOf(checkstring) >= 0){
                
            }
        }
    }
}
//    //cycle through a string. When "c" is found, print it and the next 3 letters into checkString. 
//    //ask whether the content of checkstring matches an index in testString.
//    
