import { matchRawType } from '../collocation/matchRawType'

export function isUint32Array(source: unknown): source is Uint32Array {
  return matchRawType(source, 'Uint32Array')
}
