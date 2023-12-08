import { isFunction } from './isFunction'

export function isIterable(source: unknown): source is Iterable<unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return isFunction((source as any)?.[Symbol.iterator])
}
