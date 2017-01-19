var ask = require("readline-sync");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var input = ask.question("What is your secret message?\n").toLowerCase();

var shiftAmount = parseInt(ask.question("How many letters would you like to shift over?\nChoose a number between 1 and 26\n"));

var isReadyToEncrypt = ask.keyIn("Press 'e' to encrypt: \n", {
    limit: 'e'
});

function encrypt(input, shiftAmount) {
    var shiftAmount = shiftAmount % 26;
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (alphabet.indexOf(input[i]) < 0) {
            output += input[i];
        } else {
            output += alphabet[alphabet.indexOf(input[i]) + shiftAmount];
        }

    }
    return output;
}
console.log(encrypt(input, shiftAmount));