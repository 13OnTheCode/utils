import type { UnknownArray } from '@13onthecode/types'

import { isArray } from './isArray'

export function isNonEmptyArray(source: unknown): source is UnknownArray {
  return isArray(source) && source.length > 0
}
