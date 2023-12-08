import type { UnknownSet } from '@13onthecode/types'

import { isSet } from './isSet'

export function isNonEmptySet(source: unknown): source is UnknownSet {
  return isSet(source) && source.size > 0
}
