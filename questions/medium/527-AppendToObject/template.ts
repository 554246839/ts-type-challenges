// 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型

type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [K in (keyof T | U)]: K extends U ? V : T[K]
}
