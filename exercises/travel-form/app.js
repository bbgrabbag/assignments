
var form = document.getElementById("travel-form");

form.elements["button"].addEventListener("click", function(){
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["location"].value;
    var dietRestrict = form.elements["diet-restrict"].value;
    
    alert("First Name: " + firstName +"\nLast Name: " + lastName +
         "\nAge: " + age +
         "\nGender: " + gender +
         "\nLocation: " + location +
         "\nDiet Restrictions: " + dietRestrict);
});