// 块、元素、修饰符方法(BEM)是CSS中常用的类命名约定。
// 例如，块组件将表示为btn，依赖于块的元素将表示为btn__price，改变块样式的修饰符将表示为btn- big或btn__price- warning。
// 实现BEM<B, E, M>，从这三个参数生成字符串union。其中B是字符串字面值，E和M是字符串数组(可以为空)。

type IsSafe<T extends string, U extends string> = IsNever<T> extends true ? '' : `${U}${T}`

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${IsSafe<E[number], '__'>}${IsSafe<M[number], '--'>}`

