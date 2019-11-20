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


// const someAsyncThing = function () {
//     return new Promise(function (resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2);
//     });
// };
// setTimeout(() => { console.log(123) }, 2000);
// someAsyncThing().then(function () {
//     console.log('everything is great');
// });



// const someAsyncThing = function () {
//     return new Promise(function (resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2);
//     });
// };

// someAsyncThing().then(function () {
//     return someOtherAsyncThing();
// }).catch(function (error) {
//     console.log('oh no', error);
//     // 下面一行会报错，因为 y 没有声明
//     y + 2;
// }).then(function () {
//     console.log('carry on');
// });


// let thenable = {
//     then: function (resolve, reject) {
//         console.log(x);
//         reject(e);
//     }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function (value) {
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });


// let a = "1", b = "2";
// [a, b] = [b, a]

// console.log(a, b);

// [2, 3, 4].flatMap((x) => console.log(x));

// var arr = [[1, 2, 2], [3, 4, 5, 5], [6,[6.1,6.2,6.3], 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// function formatArr(arr) {
//     return arr.reduce((result, item) => {
//         console.log(result,111,arr,222);
//         return result.concat(item instanceof Array ? formatArr(item) : item)
//     }, [])
// }

// var arr2 = formatArr(arr)
// console.log(arr2);


// function* f() {
//     console.log('执行了！')
//   }
  
//   var generator = f();
  
//   setTimeout(function () {
//     generator.next()
//   }, 2000);

// function unshiftFn() {
//   const a = []

//   console.time('unshift')
//   for (var i=0;i<100000;i++) {
//       a.unshift(1);
//   }

//   console.timeEnd('unshift')
// }

// function pushFn() {
//   const a = []

//   console.time('push')
//   for (var i=0;i<100000;i++) {
//       a.push(1);
//   }

//   console.timeEnd('push')
// }

// unshiftFn() // unshift: 2297.383ms
// pushFn() // push: 3.760ms

// var array = [];
// for(var i = 0; i <3; i++) {
//  array.push(() => i);
// }
// console.log(array()); 
// var newArray = array.map(el => el());
// console.log(newArray); 

var x = 10;
var foo = {
  x: 90,
  getX: function() {
    return this.x;
  }
};
console.log(foo.getX()); // prints 90
var xGetter = foo.getX;
console.log(xGetter()); // prints ??