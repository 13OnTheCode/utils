import { isNull } from './isNull'
import { isUndefined } from './isUndefined'

export function isNullable(source: unknown): source is null | undefined {
  return isNull(source) || isUndefined(source)
}
