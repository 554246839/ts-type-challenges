// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
