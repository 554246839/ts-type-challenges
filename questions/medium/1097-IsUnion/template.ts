// 实现一个类型IsUnion，它接受输入类型T，并返回T是否解析为联合类型

// T = string | number, T extends K
// string extends string | number
// number extends string | number

type IsUnion<T, K = T> = [T] extends [never] ? false : T extends K ? [K] extends [T] ? false : true : never 
