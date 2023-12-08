import { matchRawType } from '../collocation/matchRawType'

export function isBigUint64Array(source: unknown): source is BigUint64Array {
  return matchRawType(source, 'BigUint64Array')
}
