var fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length)

//使用一个合法下标为数组元素赋值
fruits[5] = 'mango';
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length);

//length更小的值则会删掉一部分元素,并且不可以再恢复
fruits.length = 2
console.log(Object.keys(fruits));
console.log(fruits.length);