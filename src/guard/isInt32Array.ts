import { matchRawType } from '../collocation/matchRawType'

export function isInt32Array(source: unknown): source is Int32Array {
  return matchRawType(source, 'Int32Array')
}
