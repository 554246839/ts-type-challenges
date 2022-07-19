// 实现Array.Join。Join<T, U>接受数组T，数字或者字符串U

type Join<T extends unknown[], U extends number | string, S extends string = ''> =
  T extends [infer F extends string, ...infer R]
  ? Join<R, U, S extends '' ? F : `${S}${U}${F}`>
  : S 
