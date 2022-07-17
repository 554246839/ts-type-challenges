// 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除

type Trim<S extends string> =
  S extends `${' ' | '\t' | '\n'}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer R}${' ' | '\t' | '\n'}`
  ? Trim<R>
  : S
