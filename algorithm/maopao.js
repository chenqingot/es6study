function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i; j<arr.length; j++){
            if(arr[j]<arr[i]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
            console.log(arr);
        }
    }
    console.log(arr);
}

sort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])