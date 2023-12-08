import type { UnknownObject } from '@13onthecode/types'

import { isObject } from './isObject'

export function isNonEmptyObject(source: unknown): source is UnknownObject {
  return isObject(source) && Object.keys(source).length > 0
}
