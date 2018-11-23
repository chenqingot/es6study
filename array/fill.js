//用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
//arr.fill(value[, start[, end]])

var array1 = [1, 2, 3, 4];
console.log(array1.fill(8, 2, 4));

//expected output: [ 1, 2, 8, 8 ]