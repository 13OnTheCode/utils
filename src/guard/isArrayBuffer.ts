import { matchRawType } from '../collocation/matchRawType'

export function isArrayBuffer(source: unknown): source is ArrayBuffer {
  return matchRawType(source, 'ArrayBuffer')
}
