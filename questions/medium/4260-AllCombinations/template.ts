// 实现类型allcombination ，返回来自S的字符的所有字符串组合。

type AllCombinations<S extends string> = Combination<String2Union<S>>

type String2Union<T extends string> =
  T extends `${infer F}${infer R}`
  ? F | String2Union<R>
  : T

type Combination<T extends string, S extends string = '', U = T> =
  U extends T
  ? S | Combination<Exclude<T, U>, `${S}${U}`>
  : S
