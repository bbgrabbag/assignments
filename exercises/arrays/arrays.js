var fruit = ["banana", "apple", "orange","watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.splice(3,1);
console.log(vegetables);

fruit.splice(0,1);
console.log(fruit);

console.log(fruit.indexOf("orange"));

fruit.push(fruit.indexOf("orange"));
console.log(fruit);
console.log(vegetables.length);
vegetables.push(vegetables.length);
console.log(vegetables);
var food = fruit.concat(vegetables);
console.log(food);
food.splice(4,2);
console.log(food);
food.reverse();
console.log(food.toString());

