let array1 = ['a', 'b', 'c'];
// 重点1.可以添加多个 
// 重点2.返回这个数组的新长度
// push 和 unshift 重点部分一样，一个是向后插，一个是向前插
console.log(array1.unshift('d', 'e', 'f'));
console.log(array1, 'unshift');
console.log(array1.push('x', 'y', 'z'));
console.log(array1, 'push');
//pop 和 shift 分别返回要删除的数组元素
console.log(array1.pop());
console.log(array1, 'pop');
console.log(array1.shift());
console.log(array1, 'shift');