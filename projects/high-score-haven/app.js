//take text from input and create a new row with corresponding columns.

var trashMessage = function () {
    if (document.getElementById("trash-talk").checked) {
        var randomNum = Math.floor((Math.random() * 3) + 1);
        if (randomNum === 1) {
            return "I pwn n00bs";
        } else if (randomNum === 2) {
            return "You got REKT, bro!";
        } else {
            return "SHOW ME WHAT YOU GOT. SHOW ME WHAT YOU GOT. SHOW ME WHAT YOU GOT.";
        }
    } else {
        return "";
    }
}

$("#submit").click(function () {
    //start a new row with corresponding columns
    if ($("#name").val() === "" || $("#game").val() === "" || $("#date").val() === "" || $("#high-score").val() === "" || $("#game-type") === ""){
        alert("You must provide all information!");
    } else {
    $("tbody").prepend(`<tr>
<th class = "text-center">${$("#name").val()}</th>
<th class = "text-center">${$("#game").val()}</th>
<th class = "text-center">${$("#date").val()}</th>
<th class = "text-center">${$("#game-type").val()}</th>
<th class = "text-center">${$("#high-score").val()}</th>
<th class = "text-center">${trashMessage()}</th>
</tr>`);
}});