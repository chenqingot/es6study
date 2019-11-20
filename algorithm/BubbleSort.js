function sort(arr) {
    console.time('改进前冒泡排序耗时');
    const length = arr.length;
    if (length <= 1) return;
    for (let i = 0; i < length - 1; i++) {
        let hasChange = false;
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                hasChange = true;
            }
        }
        if (!hasChange) break;
    }
    console.timeEnd('改进前冒泡排序耗时');
    console.log(arr);
}

sort([87, 98, 241, 532, 23, 5435, 64, 156, 54, 322, 45, 4, 654, 32, 16])