"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./tsFunction");
var a = 123;
var h1 = document.createElement("h1");
h1.innerHTML = "hello TypeScript!";
document.body.appendChild(h1);
console.log(a);
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
function foo() {
    var _a;
    var name = Symbol();
    var obj = (_a = {},
        _a[name] = "liwei",
        _a);
    console.log(obj);
    console.log(obj[name]);
}
foo();
// 枚举
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));
var sw;
(function (sw) {
    sw["Off"] = "off";
    sw["On"] = "on";
})(sw || (sw = {}));
// 只有数字枚举支持反向映射
console.log(Status.Success);
console.log(Status[200]);
// const enum
// 定义枚举的语句之前加上const关键字,这样编译后的代码不会创建这个对象,只是会从枚举里拿到相应的值进行替换;
// 注意观察这段代码编译完之后的js代码,就可以看到其中的区别
var Switch;
(function (Switch) {
    Switch[Switch["Off"] = 0] = "Off";
    Switch[Switch["On"] = 1] = "On";
})(Switch || (Switch = {}));
var switchStatus = Switch.On;
var animalType = 1 /* Dog */;
// enum总结: 两种基本的枚举:数字枚举和字符串枚举,还有衍生的异构枚举(不推荐使用,有违初衷,真使用了要考虑整理一下数据类型了)
// 暂时了解:'枚举'与'枚举成员'作为类型使用, 具体报错信息看下方注释代码
/*
// 枚举成员类型
interface Dog {
    type: Animal.Dog; // 这里使用Animal.Dog作为类型，指定接口Dog的必须有一个type字段，且类型为Animal.Dog
}
interface Cat {
    type: Animal.Cat; // 这里同上
}
let cat1: Cat = {
    type: Animal.Dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
};
let dog: Dog = {
    type: Animal.Dog
};

// 枚举类型
interface Light {
    status: Switch;
}
const light1: Light = {
  status: Animal.Dog // error 不能将类型“Animal.Dog”分配给类型“Status”
};
const light2: Light = {
  status: Switch.Off
};
const light3: Light = {
  status: Switch.On
};
*/
