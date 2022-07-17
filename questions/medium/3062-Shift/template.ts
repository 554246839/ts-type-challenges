// 实现Array.shift的类型版本

type Shift<T extends any[]> = T extends [any, ...infer R] ? R : never
