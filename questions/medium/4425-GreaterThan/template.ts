// 实现一个大于<T, U>类型，就像T > U
// 负数不需要考虑。

// 只能比较递归极限 1000 内
// type GreaterThan<T extends number, U extends number, R extends any[] = []> =
//   R['length'] extends T ? false :
//   R['length'] extends U ? true :
//   GreaterThan<T, U, [any, ...R]>

// 将字符串转换为数组类型
type TransferArr<T extends string> = T extends `${infer F}${infer R}` ? [F, ...TransferArr<R>] : []

// 比较两个数字的长短, true => 大  false => 小 never => 相等
type GreaterThanNumber<T extends number | string, U extends number | string, R extends any[] = []> =
  T extends U ? never :
  `${R['length']}` extends `${T}` ? false :
  `${R['length']}` extends `${U}` ? true :
  GreaterThanNumber<T, U, [any, ...R]>

// 长度相等的数组的相同位比较
type GreaterThanArray<T extends string[], U extends string[], A extends any[] = []> =
  GreaterThanNumber<T[A['length']], U[A['length']]> extends infer REST
  ? [REST] extends [never]
  ? A['length'] extends T['length']
  ? false
  : GreaterThanArray<T, U, [...A, any]>
  : REST
  : never

type GreaterThan<
  T extends number,
  U extends number,
  TA extends any[] = TransferArr<`${T}`>,
  UA extends any[] = TransferArr<`${U}`>
  > =
  GreaterThanNumber<TA['length'], UA['length']> extends infer REST
  ? [REST] extends [never]
  ? GreaterThanArray<TA, UA>
  : REST
  : never
