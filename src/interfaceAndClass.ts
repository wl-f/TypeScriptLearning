interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string,// 生命sayHi属性为一个返回值为字符串的函数
    // sayHi():string
}

const customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => {
        return "Hi there"
    }
};

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

const employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => {
        return "Hello!!!"
    }
};

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)


interface ContentInterface {
    getContent(): String;
}

class Article implements ContentInterface {
    // 必须实现getContent方法
    public getContent(): String {
        return 'I am an article.';
    }
}

class Passage implements ContentInterface {
    // 但实现方式可以不同
    public getContent(): String {
        return 'I am a passage.'
    }
}

class News implements ContentInterface {
    // 没有实现getContent方法，编译器会报错
    public getContent(): String {
        return ''
    }
}

function print(obj: ContentInterface): void {
    // 实现了ContentInterface的对象是一定有getContent方法的
    console.log(obj.getContent());
}

let c = new Article();
let p = new Passage();

print(c); // "I am an article."
print(p); // "I am a passage."
