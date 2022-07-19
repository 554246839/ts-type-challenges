// 实现TrimRight<T>，它接受一个确切的字符串类型，并返回一个删除结尾空格的新字符串

type TrimRight<S extends string> = S extends `${infer F}${' ' | '\n' | '\t'}` ? TrimRight<F> : S
