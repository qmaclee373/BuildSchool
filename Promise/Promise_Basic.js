const promise1 = new Promise(function (resolve, reject) {
     setTimeout(() => {
     resolve('執行成功會呼叫 resolve method');
     }, 3000);
    });

    promise1
     .then(result => {
     console.log(result);
     })

     .catch(ex => {
     console.log("Error : " + ex);
     })

     .finally(() => {
     console.log("Promise finally done.");
     });

     
     const promise3 = new Promise(function(resolve,reject){
        resolve("Succeed_3");
        reject("Error_3");
     }  );
     promise3.then(function(result){
        console.log("成功的回傳值：" + result);
     }, 
     function(ex){
     console.log("失敗原因：" + ex);
     });