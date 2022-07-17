// 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ [K in keyof T]: T[K] extends Promise<infer P> ? P : T[K] }>
