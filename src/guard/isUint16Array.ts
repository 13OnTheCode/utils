import { matchRawType } from '../collocation/matchRawType'

export function isUint16Array(source: unknown): source is Uint16Array {
  return matchRawType(source, 'Uint16Array')
}
