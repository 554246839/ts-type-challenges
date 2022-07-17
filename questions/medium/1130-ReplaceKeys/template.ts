// 实现一个类型ReplaceKeys，替换联合类型中的键，如果某个类型没有这个键，只需跳过替换，类型有三个参数

type ReplaceKeys<U, T, Y> =
  U extends any ? {
    [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K]
  } : never
