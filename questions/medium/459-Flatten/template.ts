// 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型

// type Flatten<T extends unknown[], U extends unknown[] = []> =
//   T extends [infer F, ...infer Rest]
//   ? F extends unknown[]
//   ? Flatten<Rest, [...U, ...Flatten<F>]> : Flatten<Rest, [...U, F]> : U

type Flatten<T extends unknown[]> =
  T extends [infer F, ...infer R]
  ? F extends unknown[]
  ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>] : T
