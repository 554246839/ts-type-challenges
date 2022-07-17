// 给定一个只包含字符串类型的元组T和一个类型U，递归地构建一个对象

type TupleToNestedObject<T, U> =
  T extends [infer F extends PropertyKey, ...infer R] ? {
    [P in F]: TupleToNestedObject<R, U>
  } : U
