const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();
const iterator2 = array1.entries();
console.log(iterator1.next())
for (let a of iterator2) {
    console.log(a)
}