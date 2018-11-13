//1、数组的浅拷贝
//2、不改变数组的长度
const array1 = [1, 2, 3, 4, 5]
const foo = array1.copyWithin(1, 4, 5)
console.log(foo);

//关于类数组的定义
const bar = [].copyWithin.call({ 3: "abc", length: 4, 2: "xyz" }, 1, 2, 3)
console.log(bar);

const baz = ""