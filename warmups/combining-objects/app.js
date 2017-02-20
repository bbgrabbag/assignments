//given an array of objects, combine objects that share the same name property.

//check if email and name properties are the same. use to uppercase to catch permutations

var myArray = [{
    property1: "value1",
    property2: "value2",
    property3: "value3"
}, {
    property1: "value1",
    property2: "value2",
    property3: "value3"
}, {
    property1: "value1",
    property2: "value2",
    property3: "value3"
}, {
    property1: "value4",
    property2: "value5",
    property3: "value6"
},
    {
    property1: "value4",
    property2: "value5",
    property3: "value6"
}];

var combineObj = function (arrayObj){
    for(var i = 0; i < arrayObj.length; i++){
        for(var j = 0; j < arrayObj.length; j++){
            if ((j !== i) && (arrayObj[i].property1 === arrayObj[j].property1)) {
                arrayObj.splice(j, 1);
                
        }
    }
}
    console.log(arrayObj);
}
combineObj(myArray);
