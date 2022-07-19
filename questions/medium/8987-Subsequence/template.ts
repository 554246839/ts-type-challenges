// 给定一个唯一元素数组，返回所有可能的子序列。
// 子序列是可以从数组派生的序列，只需删除一些元素或不删除元素，而不改变其余元素的顺序。

type Subsequence<T extends any[]> =
  T extends [infer F, ...infer R] ? Subsequence<R> | [F, ...Subsequence<R>] : T
