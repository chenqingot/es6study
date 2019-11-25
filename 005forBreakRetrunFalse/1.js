// 1
for(var i=0; i<10; i++){
    if(5==i){
        break; // 只终止这个循环体，下面的代码可以执行
    }
    console.log(i,"break");
}

for(var i=0; i<10; i++){
    if(5==i){
        return false;  //遇到return false，以后的代码都不再执行
    }
    console.log(i,"return false");
}


// 因为return false出现的位置不同，上面的代码和下面的代码执行结果不一致


// 2
for(var i=0; i<10; i++){
    if(5==i){
        return false;  //遇到return false，以后的代码都不再执行
    }
    console.log(i,"return false");
}

for(var i=0; i<10; i++){
    if(5==i){
        break; // 只终止这个循环体，下面的代码可以执行
    }
    console.log(i,"break");
}