import type { EmptyObject } from '@13onthecode/types'

import { isObject } from './isObject'

export function isEmptyObject(source: unknown): source is EmptyObject {
  return isObject(source) && Object.keys(source).length === 0
}
