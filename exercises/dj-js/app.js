var box = document.getElementById("box");
box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "blue";
})
box.addEventListener("mousedown", function () {
    box.style.backgroundColor = "red";
})
box.addEventListener("mouseup", function (){
    box.style.backgroundColor = "yellow"
})
box.addEventListener("dblclick", function (){
    box.style.backgroundColor = "green"
})