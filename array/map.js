//1、map重新返回一个数组，而不是修改原数组
var array1 = [1, 2, 3, 4, 5];
const map1 = array1.map(x => x * 2);
console.log(1, map1);

//2、map会把所有数据都返回，如果没有返会，即返undefined
const map2 = array1.map(function (item) {
    if (item % 2) {
        return item * 2;
    }
})
console.log(2, map2);

/* 3、map回调的参数
 * currentValue 数组中正在处理的当前无素
 * index (optional)
 * array (optional)原数组
 * 
 * 在map回调函数内部可以改变原数组，并且进行数据迭代时使用改变后的数据。
 */
const map3 = array1.map(function (item, index, arrayx) {
    console.log(3, "item", item, 'index', index, "arrayx", arrayx);
    if (index == 1) {
        array1[array1.length - 1] = 10;
        array1.splice(array1.length - 2, 1)
    }
    if (item > 9) {
        return "hahaha"
    }
    return item;
})
// console.log(3, array1, map3)

let arr41 = [1, 2, 3, 4, 5, 6];
let arr41result = arr41.map(item => {
    if (item > 2) {
        return item;
    }

})
console.log(arr41result);

let arr41result2 = arr41.filter(item => {
    if (item > 2) {
        return item;
    }

})

console.log(arr41result2);