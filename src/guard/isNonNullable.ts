import { isNullable } from './isNullable'

export function isNonNullable<T>(source: T): source is NonNullable<T> {
  return !isNullable(source)
}
