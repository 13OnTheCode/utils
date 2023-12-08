import type { EmptyArray } from '@13onthecode/types'

import { isArray } from './isArray'

export function isEmptyArray(source: unknown): source is EmptyArray {
  return isArray(source) && source.length === 0
}
