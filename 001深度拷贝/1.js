function checkType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

function clone(target) {
    let result;
    let targetType = checkType(target);
    if (targetType === "Array") {
        result = []
    } else if (targetType === "Object") {
        result = {}
    } else{
        return target;
    }
    for (let i in target) {
        let value = target[i];
        if(targetType === "Array"||targetType === "Object"){
            result[i] = clone(value);
        }else{
            result[i] = value;
        }
    }
    return result;

}
let a1 = {
    item1:function(){
        console.log(123)
    }
}
let a2 = clone(a1);
a2.item1();



console.log(a1.item1 === a2.item1)