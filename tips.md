1. **`type`与`interface`都能定义一些复杂的数据结构, 它二者的区别是什么呢?**
 - `interface`创建了一种新的类型，而`type ` 仅仅是别名，是一种引用；
- 如果 type 使用了 union operator （|） 操作符，则不能将 type implements 到 class 上；
- 如果 type 使用了`union `（|） 操作符 ，则不能被用以 extends interface
- `type ` 不能像`interface ` 那样合并，其在作用域内唯一；
