export function isArrayBufferView(source: unknown): source is ArrayBufferView {
  return ArrayBuffer.isView(source)
}
