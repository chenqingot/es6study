let aaa = [];
let bbb = [
  { id: 1, name: "111" },
  { id: 5, name: "555" },
  { id: 3, name: "333" },
  { id: 7, name: "777" },
]
bbb.forEach((item,index)=>{
  aaa.push(item.id);
})
aaa.sort();
console.log(aaa)
let temp1 = [];
let temp2 = [];
for (let i = 0; i < aaa.length; i++) {
  for (let j = 0; j < bbb.length; j++) {
    if(aaa[i] == bbb[j].id){
      temp1.push(bbb[j]);
    }
  }
}
console.log(temp1)