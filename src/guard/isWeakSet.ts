import { matchRawType } from '../collocation/matchRawType'

export function isWeakSet(source: unknown): source is WeakSet<WeakKey> {
  return matchRawType(source, 'WeakSet')
}
