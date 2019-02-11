var array1 = ["a", "b", "c", "d", "e", "f"];
function test(arr) {
    let len = arr.length;
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}

console.log(array1);
test(array1);
console.log(array1);