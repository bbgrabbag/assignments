var unique = function (array1, array2) {
    //loop over each array and check the index of each character in th eother
    var uniqueArray = [];
    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) < 0) {
            uniqueArray.push (array1[i]);
        }
    }
    for (var i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) < 0) {
            uniqueArray.push (array2[i]);
        }
    }
    console.log(uniqueArray);
}
unique([5,8,12,4,6],[5,8,4,7,0]);


