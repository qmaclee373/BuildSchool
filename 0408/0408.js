var person = { name: "Kevin", age: 32,
 height: 175, weight: 64 };
console.log(person);
console.log("The Object is :" + person);
console.log("This Object is %o", person);
var jsonText = JSON.stringify(person);
console.log(typeof jsonText);
var p = JSON.parse(jsonText);

function Person(name, age, height, weight){
this.name = name,
this.age = age, 
this.height = height,
this.weight = weight,
this.bmi = function(){
    return weight/((height/100)**2);

}
function displayBMI(){
let lady = new Person("Mary",26,168,52);
MSGesture.innerText = "BMI ="+ lady.bmi();

}

}