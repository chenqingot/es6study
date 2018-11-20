//测试数组的所有无素是否都通过了指定函数的测试
const isBelowThreshold = (currentValue) => {
    return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));