// 实现类型 PercentageParser。根据规则 /^(\+|\-)?(\d*)?(\%)?$/ 匹配类型 T。
// 匹配的结果由三部分组成，分别是：[正负号, 数字, 单位]，如果没有匹配，则默认是空字符串。

// 把各个不同的区域分隔开来，单独匹配

type PercentageParser<A extends string, F extends '+' | '-' | '' = '', E extends '%' | '' = ''> =
  A extends `${infer H}%`
  ? PercentageParser<H, '', '%'>
  : A extends `${infer Q extends '+' | '-'}${infer R}`
  ? PercentageParser<R, Q, E>
  : [F, A, E]
