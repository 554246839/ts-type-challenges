// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To

type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends '' ? S : S extends `${infer F}${From}${infer E}` ? `${F}${To}${ReplaceAll<E, From, To>}` : S
