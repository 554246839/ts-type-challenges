// 递归地将数组平展到深度时间

// 平铺一次
type FlattenOne<T extends unknown[]> =
  T extends [infer F, ...infer R] ? F extends unknown[] ? [...F, ...FlattenOne<R>] : [F, ...FlattenOne<R>] : T

// 检查是否还有数组子值
type HasArrayItem<T extends unknown[]> =
  T extends [infer F, ...infer R] ? F extends unknown[] ? true : HasArrayItem<R> : false

type FlattenDepth<T extends unknown[], D extends number = 1, DO extends any[] = []> =
  HasArrayItem<T> extends false
  ? T
  : DO['length'] extends D
  ? T
  : FlattenDepth<FlattenOne<T>, D, [any, ...DO]>

