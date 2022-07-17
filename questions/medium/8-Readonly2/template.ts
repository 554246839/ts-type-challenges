// 实现一个通用 MyReadonly2<T, K>，它带有两种类型的参数 T 和 K。
// K 指定应设置为 Readonly 的 T 的属性集。如果未提供 K，则应使所有属性都变为只读，就像普通的 Readonly<T> 一样

type MyReadonly2<T, K extends keyof T = keyof T> =
  {
    readonly [P in keyof T]: T[P]
  } & {
    [P in keyof T as P extends K ? never : P]: T[P]
  }
  // {
  //   readonly [P in keyof T]: T[P]
  // } & {
  //   [P in Exclude<keyof T, K>]: T[P]
  // }
