import { Equal, Expect } from '@type-challenges/utils'

type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer P}`
  ? TrimLeft<P>
  : T
type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]
