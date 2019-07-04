// const promise = new Promise(function (resolve, reject) {
//     let num = Math.random();
//     if (num > 0.5) {
//         resolve("resolve");
//     } else {
//         reject("error");
//     }
// });

// promise.then(function (value) {
//     console.log(value);
// }, function (error) {
//     console.log(error);
// });


// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
//   });
//   promise.then(function() {
//     console.log('resolved.');
//   });
//   console.log('Hi!');

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(new Error('abc')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => { console.log("p2已执行");resolve(p1) }, 1000)
// })

// p2
//     .then(resolve => console.log(resolve, "resolve"))
//     .catch(error => console.log(error,"error"))



// const promise = new Promise(function (resolve, reject) {
//     throw new Error('test');
// });
// promise.then(abc=>{
//     console.log(abc);
// }).catch(function (error) {
//     console.log(error);
// });


const someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};
setTimeout(() => { console.log(123) }, 2000);
someAsyncThing().then(function () {
    console.log('everything is great');
});

