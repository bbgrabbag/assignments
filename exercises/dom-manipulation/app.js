var firstNumber = "";
var secondNumber = "";
function add(){
    var firstNumber = Number(document.getElementById("number1").value);
    var secondNumber = Number(document.getElementById("number2").value);
    document.getElementById("result").textContent = firstNumber + secondNumber;
}
document.getElementById("add").addEventListener("click", add);

function subtract(){
    var firstNumber = Number(document.getElementById("number1").value);
    var secondNumber = Number(document.getElementById("number2").value);
    document.getElementById("result").textContent = firstNumber - secondNumber;
}
document.getElementById("subtract").addEventListener("click", subtract);

function multiply(){
    var firstNumber = Number(document.getElementById("number1").value);
    var secondNumber = Number(document.getElementById("number2").value);
    document.getElementById("result").textContent = firstNumber * secondNumber;
}
document.getElementById("multiply").addEventListener("click",multiply);