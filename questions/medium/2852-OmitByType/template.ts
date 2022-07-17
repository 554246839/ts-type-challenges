// 从T中选择一组不能赋值给U的属性

type OmitByType<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P]
}
