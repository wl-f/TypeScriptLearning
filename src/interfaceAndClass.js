"use strict";
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi there";
    }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () {
        return "Hello!!!";
    }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
var Article = /** @class */ (function () {
    function Article() {
    }
    // 必须实现getContent方法
    Article.prototype.getContent = function () {
        return 'I am an article.';
    };
    return Article;
}());
var Passage = /** @class */ (function () {
    function Passage() {
    }
    // 但实现方式可以不同
    Passage.prototype.getContent = function () {
        return 'I am a passage.';
    };
    return Passage;
}());
var News = /** @class */ (function () {
    function News() {
    }
    // 没有实现getContent方法，编译器会报错
    News.prototype.getContent = function () {
        return '';
    };
    return News;
}());
function print(obj) {
    // 实现了ContentInterface的对象是一定有getContent方法的
    console.log(obj.getContent());
}
var c = new Article();
var p = new Passage();
print(c); // "I am an article."
print(p); // "I am a passage."
