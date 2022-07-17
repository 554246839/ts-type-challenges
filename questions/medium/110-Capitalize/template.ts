// 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样

type MyCapitalize<S extends string> = S extends `${infer F}${infer Rest}` ? F extends string ? `${Uppercase<F>}${Rest}` : S : S
