var calc = require("./calc");
var readline = require("readline-sync");

console.log("\n======================================Welcome to The Turner Calculator, where all your dreams come true!======================================\n");

var operation = readline.question("\nWhat operation would you like to do today?\n1 - Add\n2 - Subtract\n3 - Multiply\n4 - Divide\n5 - Exponentiate\n");

var number1 = parseInt(readline.question("\nPick your first number:\n"));
var number2 = parseInt(readline.question("\nPick your second number:\n"));

if (operation === "1"){
    console.log (number1 + " + " + number2 + " = " + calc.add(number1, number2));
} else if (operation === "2"){
    console.log (number1 + " - " + number2 + " = " + calc.subtract(number1, number2));
} else if (operation === "3"){
    console.log (number1 + " * " + number2 + " = " + calc.multiply(number1, number2));
} else if (operation === "4"){
    console.log (number1 + " ÷ " + number2 + " = " + calc.divide(number1, number2));
} else if (operation === "5"){
    console.log (number1 + " ^ " + number2 + " = " + calc.exponentiate(number1, number2));
};