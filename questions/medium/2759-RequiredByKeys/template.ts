// 实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。
// K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的

type RequiredByKeys<T, K = never> = [K] extends [never] ? Required<T> :
  Merges<T &
    {
      [P in keyof T as P extends K ? P : never]-?: T[P]
    }
  >
