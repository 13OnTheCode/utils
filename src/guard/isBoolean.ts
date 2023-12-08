import { isFalse } from './isFalse'
import { isTrue } from './isTrue'

export function isBoolean(source: unknown): source is boolean {
  return isTrue(source) || isFalse(source)
}
