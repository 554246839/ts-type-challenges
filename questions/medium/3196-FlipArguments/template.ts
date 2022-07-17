// 实现lodash的_.flip的类型版本。
// 类型flipararguments <T>要求函数类型为T，并返回一个新的函数类型，其返回类型与T相同，但参数相反

type Reverses<T> = T extends [infer F, ...infer R] ? [...Reverses<R>, F] : T

type FlipArguments<T extends (...vals: any) => any> =
  T extends (...vals: infer P) => infer R ? (...vals: Reverses<P>) => R : T
