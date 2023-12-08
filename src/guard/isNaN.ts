export function isNaN(source: unknown): source is number {
  return Number.isNaN(source)
}
