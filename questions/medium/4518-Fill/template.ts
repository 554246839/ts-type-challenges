// Fill，一个常见的JavaScript函数，现在让我们用类型来实现它。
// 填写< T、N,开始?,结束?>，如您所见，Fill接受四种类型的参数，其中T和N是必需参数，Start和End是可选参数。
// 参数配置要求如下:“T”必须是元组，“N”可以是任意类型的值，“开始”和“结束”必须是大于等于0的整数。

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Len extends any[] = [],
  Flag extends boolean = Len['length'] extends Start ? true : false
  > =
  Start extends End ? T :
  Len['length'] extends End ? T :
  T extends [infer F, ...infer R]
  ? (
    Flag extends false
    ? [F, ...Fill<R, N, Start, End, [any, ...Len]>]
    : [N, ...Fill<R, N, Start, End, [any, ...Len], Flag>]
  ) : T
