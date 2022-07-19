// 实现Lodash的类型版本。Without<T, U>接受数组T，数字或数组U，并返回一个不包含U元素的数组。

type Without<
  T extends unknown[],
  U extends number | unknown[],
  A extends unknown[] = U extends number ? [U] : U
  > =
  T extends [infer F, ...infer R]
  ? (
    Includes<A, F> extends true
    ? Without<R, U>
    : [F, ...Without<R, U>]
  ) : T
