//提取
let str = "http://localhost:8080/?user=%E5%BC%A0%E4%B8%89&tel=13808888888&url=https://www.cadillac.com.cn/suv/xt5.html";
let result = str.match(/\/(\w*).html/);
console.log(result, result[1]);