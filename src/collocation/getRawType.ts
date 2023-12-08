export function getRawType(source: unknown) {
  return Object.prototype.toString.call(source).slice(8, -1)
}
