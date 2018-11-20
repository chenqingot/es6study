const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();
const iterator2 = array1.entries(); //返回一个可迭代对象 iterable类型 
console.log(iterator1.next())
for (let a of iterator2) { //集合可以通过新的for ... of循环来遍历
    console.log(a)
}