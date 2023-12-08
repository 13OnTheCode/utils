import { matchRawType } from '../collocation/matchRawType'

export function isFloat32Array(source: unknown): source is Float32Array {
  return matchRawType(source, 'Float32Array')
}
