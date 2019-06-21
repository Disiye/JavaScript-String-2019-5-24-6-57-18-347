// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
var upperName = name.toUpperCase();
console.log(upperName);

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function initialCapital(str) {
	return str.toLowerCase().replace(/\b([\w|']+)\b/g, function(word) {
		return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
	});
}
console.log(initialCapital(sentence));

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
var moneyNum = money.replace(/[^0-9]/ig,"");
console.log(moneyNUm);
