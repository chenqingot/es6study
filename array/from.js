// Syntax ES6
// Array.from(arrayLike[, mapFn[, thisArg]])

//1、from方法从一个类似数组或可迭代对象中创建一个新的数组实例
const array1 = Array.from("chenqing")
console.log(array1);

//对象不返回结果
const array2 = Array.from({ a: 1, b: 2 })
console.log(array2);

//还支持 Set 和 Map