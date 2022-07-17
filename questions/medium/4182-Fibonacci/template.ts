// 实现一个泛型Fibonacci<T>接受数字T并返回它对应的Fibonacci数字。

type Fibonacci<T extends number, R extends any[] = [], U1 extends any[] = [], U2 extends any[] = []> =
  R['length'] extends T
  ? [...U1, ...U2]['length']
  : R['length'] extends (0 | 1)
  ? Fibonacci<T, [...R, any], [], [any]>
  : Fibonacci<T, [...R, any], U2, [...U1, ...U2]>
