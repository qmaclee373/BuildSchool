let iterable = [103, 105, 107, 109, 111, 113, 115, 117];

// 回傳「key」  "0", "1", "2"
for (let i in iterable) {console.log(i);}

// 回傳「value」 // 3, 5, 7
for (let i of iterable) {console.log(i);}