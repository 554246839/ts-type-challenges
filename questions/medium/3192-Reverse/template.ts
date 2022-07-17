// 实现类型版本的数组反转 Array.reverse

type Reverse<T, U extends unknown[] = []> =
  T extends [infer F, ...infer R] ? Reverse<R, [F, ...U]> : U
