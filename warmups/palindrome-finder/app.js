function reverse(string) {
  var reverseHalf = "";
  for (var i = string.length - 1; i >= 0; i--){
    reverseHalf += string[i];
  }
  return reverseHalf;
  
}
var isPalin = function(string){
    string = string.replace(/[^\w\s]|_/g, "");
    var noSpace = string.replace(/\s+/g, "");
   if (noSpace.length % 2 > 0 && noSpace.length > 1){
       var halfLength = Math.ceil(noSpace.length/2);
       var firstHalf = noSpace.substring(0, halfLength-1);
       var secondHalf = noSpace.substring(halfLength);
       var reverseSecondHalf = reverse(secondHalf);
    
       if(firstHalf === reverseSecondHalf){
           console.log (true);
       } else {
           console.log (false);
       }
       
   } else if (noSpace.length > 1){
       var halfLength = (noSpace.length/2);
       var firstHalf = noSpace.substring(0, halfLength-1);
       var secondHalf = noSpace.substring (halfLength);
       var secondHalf = reverse(firstHalf);
       if(firstHalf === reverse(secondHalf)){
           console.log (true);
       } else {
           console.log (false);
       }
       
   } else {
       console.log ("String must be longer");
   }
    
}

isPalin("12321");
     
