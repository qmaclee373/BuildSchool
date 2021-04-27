var promise1 = Promise.resolve(35);
var promise2 = Promise.resolve(promise1)

promise2.then(function (value) {
 console.log('p2 解析 P1 value 為:' + value);
}); 