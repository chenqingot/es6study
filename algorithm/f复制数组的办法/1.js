const a1 = [1, 2];
const a2 = a1;
// a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。
a2[0] = 2;
console.log(a1 == a2);

// ES5
const b1 = [1, 2];
const b2 = b1.concat();
console.log(b2);

// ES6
const d1 = [1,2];
const d2 = [...d1];
console.log(d2);

//JSON
const e1 = [1,2];
const e2 = JSON.parse(JSON.stringify(e1));
console.log(e2 == e1);