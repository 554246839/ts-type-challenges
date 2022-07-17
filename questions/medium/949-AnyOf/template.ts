// 在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，
// 如果数组中任一个元素为真，则返回 true，否则返回 false。如果数组为空，返回 false

type AnyOf<T extends readonly any[]> =
  // T extends [infer F, ...infer R] ? F extends (0 | false | '' | [] | Record<PropertyKey, never>) ? AnyOf<R> : true : false
  T[number] extends (0 | false | '' | [] | Record<PropertyKey, never>) ? false : true
