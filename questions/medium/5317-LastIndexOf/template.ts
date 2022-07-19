// 实现Array.lastIndexOf。lastIndexOf<T, U>接受元组T，任意U，并返回数组T中最后一个U的索引

type LastIndexOf<T extends unknown[], U> =
  T extends [...infer R, infer L]
  ? (
    Equal<U, L> extends true ? R['length'] : LastIndexOf<R, U>
  ) : -1
