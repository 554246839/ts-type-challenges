// ? 实现Object.entries的类型版本

type ObjectEntries<T> = {
  [K in keyof T]-?: [K, [Exclude<T[K], undefined>] extends [never] ? undefined : Exclude<T[K], undefined>]
}[keyof T]
