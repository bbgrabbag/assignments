//Check if a string has hyphen, underscore, or space
//replace that character with empty string and uppercase the next letter.

function camelCase(string){
    var separators = ["-", "_", " "];
    //loop that will check for a hyphen, underscore, or space
    for(var i = 0; i < string.length; i++){
        if (separators.indexOf(string[i]) >= 0){
            string = string.replace(string[i], "");
            string[i].toUpperCase();
        }
        
    }
    console.log(string);
}
camelCase("free-bird");