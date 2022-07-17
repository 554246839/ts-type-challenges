// 实现一个类型IsNever，它接受输入类型t。如果的类型解析为never，则返回true，否则返回false
// never 类型用其它结构的值来判断

type IsNever<T> = [T] extends [never] ? true : false
