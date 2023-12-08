import { matchRawType } from '../collocation/matchRawType'

export function isUint8Array(source: unknown): source is Uint8Array {
  return matchRawType(source, 'Uint8Array')
}
