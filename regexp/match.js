//提取
let str = "http://localhost:8080/?user=%E5%BC%A0%E4%B8%89&tel=13808888888&url=https://www.cadillac.com.cn/suv/xt5.html";
let result = str.match(/\/(\w*).html/);
console.log(result, result[1]);


// input	只读属性，原始字符串	cdbBdbsbz
// index	只读属性，匹配到的子串在原始字符串中的索引	1
// [0]	只读元素，本次匹配到的子串	dbBd
// [1], ...[n]	只读元素，正则表达式中所指定的分组所匹配到的子串，其数量由正则中的分组数量决定，无最大上限	[1]: bB
// [2]: d
myRe = /d(b+)(d)(c+)/i;
myArray = myRe.exec("cxxxxdbBdcccccbsbz");
console.log(myArray);