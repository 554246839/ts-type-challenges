// 实现just-flip-object类型

type Flip<T extends Record<string | number, any>> = {
  [P in keyof T as `${T[P]}`]: P
}
