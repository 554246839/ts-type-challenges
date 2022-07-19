// 实现MapTypes<T, R>，它将对象T中的类型转换为类型R定义的不同类型，类型R具有以下结构
// type StringToNumber = {
//   mapFrom: string; // value of key which value is string
//   mapTo: number; // will be transformed for number
// }

type MapTypes<T, R extends { mapFrom: unknown, mapTo: unknown }> = {
  [P in keyof T]: [T[P]] extends [R['mapFrom']] ? R extends { mapFrom: T[P] } ? R['mapTo'] : never : T[P]
}
