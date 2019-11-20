console.time("abc");
let arr = Array.from({ length: 10000 }).map((v, k) => k);

const length = arr.length;
let i = 0;
let sum = 0;
// while (i < length) {
//     const element = arr[i];
//     sum += element;
//     i++;
// }

for (let i=0; i<arr.length; i++) {
    const element = arr[i];
    sum += element;
}
console.timeEnd("abc");
console.log(sum);