var input = "sssiuhifwiywefuysusudfuy";
var uniques = "";
var duplicates = "";

function filter(input) {
    for (var i = 0; i < input.length; i++) {
        //loop through each letter of input
        if (duplicates.indexOf(input[i]) === -1) {
            //checks to see if the current letter is already in the unique string
            duplicates += input[i]
                //adds duplicate letter
        } else {
            uniques += input[i]

        }

    }
    console.log (duplicates, uniques)
}
filter(input);