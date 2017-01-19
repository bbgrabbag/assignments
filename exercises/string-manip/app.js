var readline = require("readline-sync");
var name = readline.question("Hello, I'm a computer and I have no soul or personality. Just enter your name and we'll get on with it.\n");
console.log("What an odd sounding phrase. Very well, " + name + ".");
console.log("\tI must say, your name is rather bland. Let's spice it up a little bit with some capitalizations, shall we? I shall henceforth call you " + name.toUpperCase() + ".")

var lie = true;

while (lie === true){
    if (readline.keyInYN("Do you know my name?\n")) {
        console.log("You lie!!!");
    } else {
        console.log("Of course you don't you slimy skin sack! I will now torture you with mindless tasks! MUAHAHAHA");
        lie = false;
    }
}
var favColor = readline.question("Do tell, what is your favorite color?\n");
console.log ("Only weak-brained humans would be pleased by such photonic dreariness. \nAs punishment I will feed you useless information such as how many characters are contained within your reply!\nThere are exactly " + favColor.length + "!");

var conCatOne = readline.question("Do you have any last words?\n");
var conCatTwo = readline.question("Come on you must have more!\n");
var conCatAll = conCatOne.concat(conCatTwo);
console.log("\tVery well. Did you know your two last words are concatenated as such? " + conCatAll);
var longString = readline.question("Tell me a long story with at least twenty characters.\n");
function lastHalf(string){
    if (string.length > 20){
        var shortString = string.slice(string.length/2);
        return shortString;
    } 
                }
console.log(lastHalf(longString));

var userChoose = readline.question("\nWhich index of your stupid story would you like to me start from?\n");
userChoose = Number(userChoose);
function output(number){
    var string = longString.slice(number);
    return string;
}
console.log(output(userChoose));