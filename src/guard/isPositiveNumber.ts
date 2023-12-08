import { isNumber } from './isNumber'

export function isPositiveNumber(source: unknown): source is number {
  return isNumber(source) && source > 0
}
