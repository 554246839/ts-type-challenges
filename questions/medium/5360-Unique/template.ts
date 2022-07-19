// 实现Lodash的Lodash.uniq, Unique接受数组T，返回没有重复值的数组T。

type Unique<T extends unknown[], A extends unknown[] = []> =
  T extends [infer F, ...infer R] ? Includes<A, F> extends true ? Unique<R, A> : Unique<R, [...A, F]> : A
