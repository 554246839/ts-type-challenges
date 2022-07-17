// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键

type Merge<F, S> = {
  [K in (keyof F | keyof S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}
