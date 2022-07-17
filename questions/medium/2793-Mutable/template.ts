// 实现一个通用的类型 Mutable<T>，使类型 T 的全部属性可变（非只读）

type Mutable<T extends object> =
  {
    -readonly [P in keyof T]: T[P]
  }
