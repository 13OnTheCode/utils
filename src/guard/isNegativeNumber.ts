import { isNumber } from './isNumber'

export function isNegativeNumber(source: unknown): source is number {
  return isNumber(source) && source < 0
}
