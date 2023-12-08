import { isFunction } from './isFunction'

export function isAsyncIterable(source: unknown): source is AsyncIterable<unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return isFunction((source as any)?.[Symbol.asyncIterator])
}
