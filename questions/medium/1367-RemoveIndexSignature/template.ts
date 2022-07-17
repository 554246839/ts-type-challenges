// 实现RemoveIndexSignature<T>，从对象类型中排除索引签名

type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P ? never : number extends P ? never : symbol extends P ? never : P]: T[P]
}
