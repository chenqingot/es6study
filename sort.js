let arr1=[3,2,5,76,8];
let arr = [
    { id: "wewq-kfjdslk", name: "cq" },
    { id: "aasd-kfjdslk", name: "hr" },
    { id: "kjli-kfjdslk", name: "yy" },
    { id: "brzs-kfjdslk", name: "nn" }
];

arr.sort((a, b) => {
    return a.id.charCodeAt() - b.id.charCodeAt();
});

console.log(arr);