"use strict";
// import './tsFunction'
// import './interfaceAndClass'
// import './enum'
// let a:number = 123;
var h1 = document.createElement("h1");
h1.innerHTML = "hello TypeScript!";
document.body.appendChild(h1);
// console.log(a);
var merge = function (arg1, arg2) {
    var res = {}; // 这里指定返回值的类型兼备T和U两个类型变量代表的类型的特点
    res = Object.assign(arg1, arg2); // 这里使用Object.assign方法，返回一个合并后的对象；
    return res;
};
var info1 = {
    name: "liwei",
};
var info2 = {
    age: 18
};
var info = merge(info1, info2);
console.log(info.name); // error 类型“{ name: string; } & { age: number; }”上不存在属性“address”
function foo2() {
    var _a;
    var name = Symbol();
    var obj = (_a = {},
        _a[name] = "liwei",
        _a);
    console.log(obj);
    console.log(obj[name]);
}
foo2();
var e = function (a) { return 0; };
var y = function (b) { return 0; };
var z = function (c) { return false; };
console.log('y', y(''));
var Status;
(function (Status) {
    Status[Status["On"] = 0] = "On";
    Status[Status["Off"] = 1] = "Off";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
})(Color || (Color = {}));
var s = Status.On;
console.log(s);
// s = 3;
console.log(Status.On, Status.Off);
var d = Color.White;
console.log(d);
console.log('s = c', 0 === 0);
// s = c; // error Type 'Color.White' is not assignable to type 'Status'
function getSplicedStr(num) {
    function getRes(prefix) {
        return prefix + num.toFixed().toString(); // 这里使用参数num，num的类型为number或null，在运行前编译器是无法知道在运行时num参数的实际类型的，所以这里会报错，因为num参数可能为null
    }
    num = num || 0.1; // 但是这里进行了赋值，如果num为null则会将0.1赋给num，所以实际调用getRes的时候，getRes里的num拿到的始终不为null
    return getRes("liwei");
}
function getValue(obj, names) {
    return names.map(function (n) { return obj[n]; }); // 指定getValue的返回值类型为T[K][]，即类型为T的值的属性值组成的数组
}
var info3 = {
    name: "liwei",
    age: 18
};
var values = getValue(info3, ["name", 'age']);
console.log('info3', values);
// let name2: NameType = 1;
