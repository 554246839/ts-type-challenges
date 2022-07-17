// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键

type KebabCase<S extends string> =
  S extends `${infer F}${infer R}`
  ? R extends Uncapitalize<R>
  ? `${Lowercase<F>}${KebabCase<R>}`
  : `${Lowercase<F>}-${KebabCase<R>}`
  : S

