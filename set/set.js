const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}
console.log(Math.max(...[14, 3, 77]));

let nameset = new Set(['a','b']);
let newarr = Array.from(nameset);
console.log(newarr);