import type { EmptyMap } from '@13onthecode/types'

import { isMap } from './isMap'

export function isEmptyMap(source: unknown): source is EmptyMap {
  return isMap(source) && source.size === 0
}
