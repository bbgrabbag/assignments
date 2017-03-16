var anyString = "sorry for totally screwing that up lol";
var uniqueString = "";
var duplicateString = "";

function filter(input) {
    //loop through each letter of input:
    for (var i = 0; i < input.length; i++) {
        
         //checks to see if the current letter is found in any index of the unique string:
        if (uniqueString.indexOf(input[i]) === -1) {
            
            //if not found, indexOf (input[i]) will return -1, and we can concat it to the uniqueString:
            uniqueString +=input[i]
        } else {
            //if found, indexOf (input[i]) will return the index at which it occupied and we can concat it to the duplicateString:
            duplicateString += input[i]
        }
    }
    console.log("duplicates: " + duplicate);
    console.log("uniques: " + unique);
};

filter(anyString);

