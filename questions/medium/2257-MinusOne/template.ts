// 给定一个正整数作为类型的参数，要求返回的类型是该数字减 1
// TS 递归的最大栈层次应该是1000，超过就会报错，如果超过1000，则大概需要分开递归

type MinusOne<T extends number, A extends any[] = []> =
  [...A, any, any]['length'] extends T ? [...A, any]['length'] :
  [...A, any]['length'] extends T ? A['length'] :
  MinusOne<T, [...A, any, any]>
