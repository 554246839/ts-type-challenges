// 计算字符串的长度，类似于 String#length

type LengthOfString<S extends string, A extends string[] = []> =
  S extends `${infer F}${infer Rest}` ? LengthOfString<Rest, [...A, F]> : A['length']
