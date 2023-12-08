import type { ToArray, ToArrayOptions } from '@13onthecode/types'

import { isArray } from '../guard/isArray'
import { isIterable } from '../guard/isIterable'
import { isTrue } from '../guard/isTrue'

export function toArray<Source, Options extends ToArrayOptions>(
  source: Source,
  options?: Options
): ToArray<Source, Options> {
  const { convertIterable = false } = options ?? {}

  return (isArray(source)
    ? source
    : (
      isTrue(convertIterable) && isIterable(source)
        ? [...source]
        : [source]
    )) as ToArray<Source, Options>
}
