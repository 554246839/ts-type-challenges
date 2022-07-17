// 从类型 T 中选择出属性 K，构造成一个新的类型

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
