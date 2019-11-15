// import './tsFunction'
// import './interfaceAndClass'
// import './enum'



// let a:number = 123;
const h1 = document.createElement("h1");
h1.innerHTML = "hello TypeScript!";
document.body.appendChild(h1);
// console.log(a);


const merge = <T, U>(arg1: T, arg2: U): T & U => {
    let res = <T & U>{}; // 这里指定返回值的类型兼备T和U两个类型变量代表的类型的特点
    res = Object.assign(arg1, arg2); // 这里使用Object.assign方法，返回一个合并后的对象；
    return res;
};
const info1 = {
    name: "liwei",
    // address:"hangzhou"
};
const info2 = {
    age: 18
};
const info = merge(info1, info2);

console.log(info.name); // error 类型“{ name: string; } & { age: number; }”上不存在属性“address”


function foo2 ():void {
    const name = Symbol();
    let obj = {
        [name]: "liwei"
    };
    console.log(obj);
    console.log(obj[name])
}

foo2();


let e = (a: number) => 0;
let y = (b: string) => 0;
let z = (c: string) => false;
console.log('y',y(''))
namespace tt{}
enum Status {
    On,
    Off
}
enum Color {
    White,
    Black
}
let s = Status.On;
console.log(s);
// s = 3;
console.log(Status.On,Status.Off)
let d = Color.White;
console.log(d);
console.log('s = c',0 === 0);


// s = c; // error Type 'Color.White' is not assignable to type 'Status'
function getSplicedStr(num: number | null): string {
    function getRes(prefix: string) { // 这里在函数getSplicedStr里定义一个函数getRes，我们最后调用getSplicedStr返回的值实际是getRes运行后的返回值
        return prefix + num!.toFixed().toString(); // 这里使用参数num，num的类型为number或null，在运行前编译器是无法知道在运行时num参数的实际类型的，所以这里会报错，因为num参数可能为null
    }
    num = num || 0.1; // 但是这里进行了赋值，如果num为null则会将0.1赋给num，所以实际调用getRes的时候，getRes里的num拿到的始终不为null
    return getRes("liwei");
}

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] { // 这里使用泛型，并且约束泛型变量K的类型是"keyof T"，也就是类型T的所有字段名组成的联合类型
    return names.map(n => obj[n]); // 指定getValue的返回值类型为T[K][]，即类型为T的值的属性值组成的数组
}
const info3 = {
    name: "liwei",
    age: 18
};
let values: (string|number)[] = getValue(info3, ["name",'age']);
console.log('info3',values)

interface Info {
    name: string;
    age: number;
}
type NameType = Info["name"];
// let name2: NameType = 1;
