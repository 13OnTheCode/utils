import { isString } from './isString'

export function isEmptyString(source: unknown): source is '' {
  return isString(source) && source.length === 0
}
