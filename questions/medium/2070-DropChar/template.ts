// 从字符串中剔除指定字符

type DropChar<S extends string, C extends string> =
  S extends `${infer F}${infer R}` ? F extends C ? DropChar<R, C> : `${F}${DropChar<R, C>}` : ''
  // S extends `${infer R1}${C}${infer R2}` ? DropChar<`${R1}${R2}`, C> : S
