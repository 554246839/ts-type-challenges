// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型

// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type First<T extends any[]> = T extends [infer First, ...any] ? First : never
