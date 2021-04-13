/* console.log(Math.max(1,3,5,7,9,));
console.log(Math.min(-1,-3,-5,-7,-9));

console.log(Math.round(3.1415962, 4));

console.log(Math.abs(-3.1415962));

var array1 = [1, 3, 5, 7, 9];
console.log(Math.max(...array1));  */

/* function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
   }
   console.log(getRandom(1, 100));  */

 /*   var Cars = ['BMW','Benz','Audi','Lexus'];
   var Prices = [280,320,250,210];

   var PricesWithTax = Prices.map(p => p * 1.1);
   console.log(PricesWithTax); */

/* let array1 = [...Array(100).k()];
let ary1 = array1.map(x=>x+1);
console.log(ary1);

array1.forEach((item,index)=>{
    console.log(getRandom(1,100));
});
 */

var Prices = [280, 320, 250, 210];
   
   console.log('總⾦額 ： ' + Prices.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    })
    ); 