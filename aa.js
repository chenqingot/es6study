let user = [
    { name: "cc", age: 11 },
    { name: "ee", age: 50 },
    { name: "dd", age: 34 },
    { name: "bb", age: 3 },
    { name: "aa", age: 4 },
]

user.sort((a, b) => {
    return a.age < b.age;
});
console.log(user);