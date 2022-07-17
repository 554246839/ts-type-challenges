// 实现一个通用的 DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
// 您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己

type DeepReadonly<T> = {
  // readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
  readonly [P in keyof T]: T[P] extends Iterable<unknown> | Record<string, unknown> ? DeepReadonly<T[P]> : T[P]
}
