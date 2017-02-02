var readline = require("readline-sync");

//create a dicionary array of objects
var dictionary = [];
var Entry = function (word, def) {
        this[word] = def;
    }
    //create a menu option which allows user to enter a new word, look one up or quit
var isBrowsing = true;
while (isBrowsing) {
    var menuOption = readline.question("\nPress 'q' to quit\nEnter 'new' to create a new entry\nEnter 'browse' to look up a word\nPress any other key to view entire dictionary");
    if (menuOption === "q") {
        //user quits
        console.log("Bye!");
        break;
    } else if (menuOption === "new") {
        //user selects new word
        var newWord = readline.question("\nWhat is your word?\n");
        newWord = newWord.toUpperCase();
        //check if dictionary is empty
        if (dictionary.length === 0) {
            var newDef = readline.question("\nWhat is your definition?\n");
            var newEntry = new Entry(newWord, newDef);
            dictionary.push(newEntry);
            console.log(dictionary[dictionary.length - 1]);
        } else {
            //check if word and its permutations are already in dictionary
            for (var i = 0; i < dictionary.length; i++) {
                if (dictionary[i].hasOwnProperty(newWord)) {
                    console.log("Your word already exists!");
                } else {
                    var newDef = readline.question("\nWhat is your definition?\n");
                    var newEntry = new Entry(newWord, newDef);
                    dictionary.push(newEntry);
                    console.log(dictionary[dictionary.length - 1]);
                }
            }
        }
    } else if (menuOption === "browse"){
        //user looks up a word
        var newSearch = readline.question("\nWhat word would you like to look up?\n");
        newSearch = newSearch.toUpperCase();
        //search for word
        for (var i = 0; i < dictionary.length; i++) {
            //if found:
            if (dictionary[i].hasOwnProperty(newSearch)) {
                console.log(dictionary[i]);
            } else {
                //if not found:
                console.log("That word is not in the dictionary!");
            }
        }
    } else {
        console.log(dictionary);
    }
    
}