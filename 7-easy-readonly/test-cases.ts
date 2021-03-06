import { Equal, Expect } from '@type-challenges/utils'

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
interface Todo1 {
  title: string
  description: string
  completed: boolean
}

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]
