

//add each letter as a property to an object.
//if a duplicate letter appears, increase the value of that letter property by 1
//return an object with the number values of each letter property
var freqChart = {};
var array = [];

var letterFreq = function (string) {
    for (var i = 0; i < string.length; i++) {
        if (!freqChart.hasOwnProperty(string[i])) {
            array.push(string[i]);
            freqChart[string[i]] = 1;
        } else {
            freqChart[string[i]] += 1;
        }
        
    }
    console.log (freqChart);
    console.log (array);
     
}



letterFreq("oooooh yaaaaaaaa its monkey time boyyy");

