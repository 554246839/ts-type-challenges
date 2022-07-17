// 实现一个将接收到的String参数转换为一个字母Union的类型

type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never
