var person = { name: "Kevin", age: 32, height: 175, weight: 64 };
console.log(person);
console.log(person.name);
console.log(person.age); 
console.log(person.height);
console.log(person.weight); 

console.log("*".repeat(60));

let keys = Object.keys();
let values = object.values();

keys.forEach((key,index)=>{
    console.log(key + ":" + person[key]);
});

let people = [
     {name:"kevin", age:32, height:175, weight:64},
     {name:"Mary", age:18, height:158, weight:48},
     {name:"Tom", age:25, height:165, weight:60},
];

console.log(people);

console.log("#".repeat(60));

people.forEach((person,index)=>{
    let keys = Object.keys(person);
    let msg = index + ".";
    keys.forEach((key,index)=>{
    msg += key + ":" + person[key] + "," ;
});

console.log(msg);
});