// 最简单
let obj = {
    a: 123,
    b: [1, 2, {
        b3() {
            alert(234);
        }
    }, 4],
    c() {
        alert(123);
    }
}
let obj2 = JSON.parse(JSON.stringify(obj));

// 基础版
function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = target[key];
        }
        return cloneTarget;
    } else {
        return target;
    }
}
let objArr = [11, 22, 33]
let obj3 = clone(objArr);
console.log(obj3);


// Object.assign实现对象的浅拷贝
let target = { c: 1 };
let source = { a: { b: 2 } };

Object.assign(target, source)
source.a.b = 200
console.log(target);

//扩展运算符 浅拷贝
let kzobj = { a: { b: 2 } };
let kzobj2 = { ...kzobj }
console.log("扩展运算符", kzobj2);

//Array.prototype.slice 数组的浅拷贝
let sliceobj1 = { 0: "a", 1: "b", 2: "c" };
sliceobj1.length = 3;
let sliceobj2 = [].slice.call(sliceobj1);// 和这个方法是同样的效果 Array.prototype.slice.call(sliceobj1);
console.log("Array.prototype.slice", sliceobj2);

//Array.prototype.concat 数组的浅拷贝
let concatobj1 = [1, 3, { username: 'kobe' }];
let concatobj2 = concatobj1.concat();
console.log("Array.prototype.concat", concatobj2);