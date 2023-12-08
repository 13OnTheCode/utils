import { matchRawType } from '../collocation/matchRawType'

export function isBigInt(source: unknown): source is bigint {
  return matchRawType(source, 'BigInt')
}
