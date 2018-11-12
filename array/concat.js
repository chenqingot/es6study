const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

// console.log(array1.concat(array2));

// array1.push(array2)
// console.log(array1);

//[3，4] 被合并生成一个新数组
console.log(array1.concat(1, 2, [3, 4]));