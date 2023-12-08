import type { EmptySet } from '@13onthecode/types'

import { isSet } from './isSet'

export function isEmptySet(source: unknown): source is EmptySet {
  return isSet(source) && source.size === 0
}
