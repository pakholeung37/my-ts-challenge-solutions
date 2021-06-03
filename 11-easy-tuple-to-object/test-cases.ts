import { Equal, Expect } from '@type-challenges/utils'

type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
