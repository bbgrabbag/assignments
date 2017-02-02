 var number = Number(localStorage.getItem("clickCount"));
$("span").text(number);
$("body").click(function(){
   var newNumber = 0;
    newNumber ++;
    number += newNumber;
    localStorage.setItem("clickCount", number);
    $("span").text(number);
});
