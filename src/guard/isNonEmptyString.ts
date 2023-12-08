import { isString } from './isString'

export function isNonEmptyString(source: unknown): source is string {
  return isString(source) && source.length > 0
}
