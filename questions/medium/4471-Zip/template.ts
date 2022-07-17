// 实现一个类型Zip<T, U>， T和U必须是元组

type Zip<T extends unknown[], U extends unknown[]> =
  T extends [infer FT, ...infer RT]
  ? U extends [infer FU, ...infer RU]
  ? [[FT, FU], ...Zip<RT, RU>]
  : []
  : []
