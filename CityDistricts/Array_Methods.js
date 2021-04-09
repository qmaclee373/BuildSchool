/*  var Computer = ['CPU', 'DRAM' , 'SSD', 'Mouse'];
let comp = new Array('CPU', 'DRAM' , 'SSD', 'Mouse');

let Prices = [280, 320, 250, 210];
let Person = ['John', 35, 'john@gmail.com'];

let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let Fruits = ['Apple', 'Banana', 'Cherry']; */

let friends = [];
friends.length = 0;
friends.splice(0,friends.length);
console.log(friends);
console.log(friends.length); 

let Fruits = ['Apple','Banana','Cherry'];
let text1 = Fruits[0]+Fruits[1]+Fruits[2];
console.log(text1);

let text2 = "";
/* Fruits.forEach(fruit, index) => {

} */
console.log(Fruits.join());
console.log(Fruits.join(":"));
console.log(Fruits.join("-"));

let Friends = [];
Friends.push('Kevin');
Friends.push('Mary');
Friends.push('John');

console.log(Friends);

