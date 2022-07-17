// 从T中选择一组类型可赋值给U的属性

type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: U
}
