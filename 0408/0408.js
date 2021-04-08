var person = { name: "Kevin", age: 32,
 height: 175, weight: 64 };
console.log(person);
console.log("The Object is :" + person);
console.log("This Object is %o", person);
var jsonText = JSON.stringify(person);
console.log(typeof jsonText);
var p = JSON.parse(jsonText);

// console.log(person);
// console.log(typeof p); 
