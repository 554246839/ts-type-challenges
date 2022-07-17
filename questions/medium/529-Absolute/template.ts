// 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? `${R}` : `${T}`