import type { Expect, Equal } from '@type-challenges/utils'

type V = [{
  id: '123',
  parent_id: '0'
}, {
  id: '456',
  parent_id: '0'
}, {
  id: '798',
  parent_id: '123'
}]

type AnyObj = Record<string, any>
type Mg<T> = {
  [P in keyof T]: T[P]
}

type FlatToObj<T extends AnyObj[], PI extends string, U extends AnyObj[] = []> =
  T extends [infer F extends AnyObj, ...infer R extends AnyObj[]]
  ? F extends { parent_id: PI }
  ? FlatToObj<
    R,
    PI,
    [
      ...U,
      Mg<F & {
        children: FlatToObj<R, F['id']>
      }>
    ]
  >
  : FlatToObj<R, PI, U>
  : U

type R<T extends AnyObj[]> = FlatToObj<T, '0'>

const res: R<V> = [{
  id: '123',
  parent_id: '0',
  children: [{
    id: '798',
    parent_id: '123',
    children: []
  }]
}, {
  id: '456',
  parent_id: '0',
  children: []
}]

type cases = [
  Expect<Equal<FlatToObj<V, '0'>, [{
    id: '123',
    parent_id: '0',
    children: [{
      id: '798',
      parent_id: '123',
      children: []
    }]
  }, {
    id: '456',
    parent_id: '0',
    children: []
  }]>>,
]
