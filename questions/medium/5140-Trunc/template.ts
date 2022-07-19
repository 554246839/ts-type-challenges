// 实现Math的类型版本。Trunc，它接受字符串或数字，并通过删除小数部分返回数字的整数部分。

type Trunc<T extends number | string> =
  `${T}` extends `${infer F}.${any}` ? F : `${T}`
