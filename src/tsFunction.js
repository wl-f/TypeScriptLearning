"use strict";
// 定义
function function_name() {
    // 执行代码
    console.log('tsFunction', "调用函数");
}
function_name();
/*********带返回函数***********/
/*
* return_type 是返回值的类型
* 返回值的类型需要与函数定义的返回类型(return_type)一致
* */
/*

function function_name():return_type {
    // 语句
    return value;
}

*/
// eg
// 函数定义
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 调用 greet() 函数
    console.log('tsFunction', msg);
}
// 调用函数
caller();
/*********带参数函数***********/
/*
* param1、param2 为参数名
* datatype 为参数类型
* */
/*
function func_name( param1 [:datatype], param2 [:datatype]) {

}
*/
// eg
function add(x, y) {
    return x + y;
}
console.log('tsFunction-add()', add(1 + 2, 2));
/*********可选参数函数***********/
//在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ?
// eg
function buildName(firstName, lastName) {
    return firstName + lastName;
}
buildName('li'); // 试试移除'?'看看报什么错
buildName('li', 'wei');
// buildName('li','wei','50'); // 多参数
/*********参数默认值函数***********/
// 可以设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数
// eg
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    return price * rate;
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
/*********未知参数数量函数***********/
// 有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义
// eg
function buildNames(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var names = buildNames('zhangsan', 'lisi', 'wanger', 'mazi');
console.log('tsFunction-names', names);
/*********匿名函数***********/
// 一个没有函数名的函数
// eg
// 无参
var msg = function () {
    return "hello world";
};
console.log('tsFunction-msg', msg());
// 有参
var res = function (a, b) {
    return a * b;
};
console.log('tsFunction-res', res(12, 2));
// 自执行
(function () {
    var str = 'Hello,world!';
    console.log('tsFunction-自执行', str);
})();
/*********构造函数***********/
// 应该不常用,了解
// eg
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log('tsFunction-x', x);
/*********递归函数***********/
// eg
function factorial(number) {
    if (number <= 0) { // 停止执行
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // 调用自身
    }
}
console.log('tsFunction-递归', factorial(6)); // 输出 720
/*********箭头函数***********/
// 大家都熟
var foo = function (x) { return 10 + x; };
foo = function (x) { return 10 + x; };
foo = function (x) { return 10 + x; };
foo = function (x) { return 10 + x; };
console.log('tsFunction-foo()', foo(100));
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
