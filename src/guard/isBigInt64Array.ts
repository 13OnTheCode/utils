import { matchRawType } from '../collocation/matchRawType'

export function isBigInt64Array(source: unknown): source is BigInt64Array {
  return matchRawType(source, 'BigInt64Array')
}
