import { matchRawType } from '../collocation/matchRawType'

export function isFloat64Array(source: unknown): source is Float64Array {
  return matchRawType(source, 'Float64Array')
}
