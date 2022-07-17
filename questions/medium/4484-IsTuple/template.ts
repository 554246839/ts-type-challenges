// 实现一个类型IsTuple，它接受输入类型T并返回T是否是元组类型

type IsTuple<T> =
  [T] extends [never] ? (
    false
  ) : T extends readonly unknown[] ? (
    number extends T['length'] ? false : true
  ) : false
