var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array3);
//Ex - ⽤Spread Syntax
var array4 = [...array1, ...array2];
console.log(array4); 
/* 
let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
title('sort()升冪排序');
console.log(Cars.sort());
console.log(Cars.reverse());
 */
/* title('sort().reverse()降冪排序');
console.log(Cars.sort().reverse());  */

let Cars =['BMW','Benz','Audi','Lexus'];

let car = Cars.find( c=> c== 'Benz');
console.log(car);
let index = Cars.indexOf('Audi');
console.log(index);
let idx = Cars.findIndex(c=>c=="Benz");
console.log(idx); 

let Prices = [280, 320, 250, 210]; 
console.log(Prices.findIndex(p => p > 200)); 

console.log(Prices.filter(p => p > 250)); 

Prices.filter(function(item, index){
    if(item > 200){
       console.log(Cars[index] + "'s price is " + item + ", it's larger 200." )}
   });