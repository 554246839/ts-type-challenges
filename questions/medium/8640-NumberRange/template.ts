// 有时我们想要限制数字的范围……为例子

type NumberRange<
  L extends number,
  H extends number,
  A extends any[] = [],
  S extends boolean = A['length'] extends L ? true : false,
  R = never
  > =
  S extends true
  ? (A['length'] extends H
    ? R | H
    : NumberRange<L, H, [any, ...A], true, A['length'] | R>)
  : NumberRange<L, H, [any, ...A]>
