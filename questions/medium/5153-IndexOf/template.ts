// 实现Array.indexOf。indexOf<T, U>接受数组T，任意U，并返回数组T中第一个U的索引

type IndexOf<T extends unknown[], U, A extends any[] = []> =
  T extends [infer F, ...infer R] ? Equal<F, U> extends true ? A['length'] : IndexOf<R, U, [any, ...A]> : -1
