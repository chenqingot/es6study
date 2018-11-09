const a = 1;
//a = 2 TypeError: Assignment to constant variable
console.log(a);

//如果是引用类型就不一样了

const b = [1, 2]
b.push([3, 4]); //因为是一个引用 引用地址没有变化

console.log(b)