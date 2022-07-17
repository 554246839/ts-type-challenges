// lodash ? Chunk是一个非常有用的函数，现在让我们来实现它。Chunk<T, N>接受两个必需的类型参数，T必须是元组，N必须是整数>=1

type Chunk<T extends unknown[], N extends number, U extends unknown[] = []> =
  T extends [infer F, ...infer R]
  ? U['length'] extends N
  ? [U, ...Chunk<T, N>]
  : Chunk<R, N, [...U, F]>
  : U extends [] ? [] : [U]
