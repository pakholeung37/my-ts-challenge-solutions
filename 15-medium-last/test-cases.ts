import { Equal, Expect } from '@type-challenges/utils'

type Last<T extends any[]> = T extends [] ? undefined : [1, ...T][T['length']]

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
