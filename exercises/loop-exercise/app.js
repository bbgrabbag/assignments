var myArray = [2, 456, 35, 3, 4564, 53534, 57, 4, 1, 99, 10];

var lowNum = myArray[0];
for (i = 0; i < myArray.length; i++) {
    if (myArray[i + 1] < lowNum) {
        var lowNum = myArray[i + 1];
    }
}
console.log(lowNum);