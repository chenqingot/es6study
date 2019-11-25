var array = ["first", "second", "third", "fourth"];

// forEach方法体中结束循环(跳出循环)不可以使用break
array.forEach(function (item, index) {
    if (item == "third") {
        break;         //程序不是循环到这里终止，而是在编译时直接抛错
    }
    console.log(item);
})

// 如果使用return false 只是终止本次循环，而不是终止循环体
array.forEach(function (item, index) {
    if (item == "third") {
        return false;
    }
    console.log(item);
})

// 总体：forEach无法在所有元素都传递给调用的函数之前终止遍历
//try catch可以变通的解决问题。见2.js