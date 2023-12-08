import type { UnknownMap } from '@13onthecode/types'

import { isMap } from './isMap'

export function isNonEmptyMap(source: unknown): source is UnknownMap {
  return isMap(source) && source.size > 0
}
