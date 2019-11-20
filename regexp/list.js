function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷你';

// console.log(s.length) // 4
// console.log(codePointLength(s)) // 2


// const cat = {
//   lives: 9,
//   jumps: function() {
//     this.lives--;
//     console.log(this.lives);
//   }
// }

// cat.jumps();

// let max = Math.max.apply(null, [4, 3, 77]);
// console.log(max);

// let arr = [1, [2, [3]]].flat()
// console.log(arr);

// const obj = {
//   foo: 123,
//   get bar() { return 'abc' }
// };

// console.log(Object.getOwnPropertyDescriptors(obj));




class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

console.log(inst.prop,1111);