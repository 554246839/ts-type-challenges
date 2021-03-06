// 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型

type Permutation<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Permutation<Exclude<U, T>>] : []
