import { matchRawType } from '../collocation/matchRawType'

export function isInt8Array(source: unknown): source is Int8Array {
  return matchRawType(source, 'Int8Array')
}
