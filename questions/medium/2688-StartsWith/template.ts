// 实现StartsWith<T, U>,接收两个string类型参数,然后判断T是否以U开头,根据结果返回true或false

type StartsWith<T extends string, U extends string> = T extends `${U}${any}` ? true : false
