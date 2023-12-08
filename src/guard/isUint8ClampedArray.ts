import { matchRawType } from '../collocation/matchRawType'

export function isUint8ClampedArray(source: unknown): source is Uint8ClampedArray {
  return matchRawType(source, 'Uint8ClampedArray')
}
