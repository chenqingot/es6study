var array = ["first", "second", "third", "fourth"];

try {
    array.forEach((item, index) => {
        if (item == "third") {
            throw new Error("EndIterative");
        }
        console.log(item)
    })
} catch (e) {
    if (e.message != "EndIterative") {
        throw e;
    }
}