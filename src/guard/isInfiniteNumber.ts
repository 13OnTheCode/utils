export function isInfiniteNumber(source: unknown): source is number {
  return source === Number.POSITIVE_INFINITY || source === Number.NEGATIVE_INFINITY
}
