import { matchRawType } from '../collocation/matchRawType'

export function isWeakRef(source: unknown): source is WeakRef<WeakKey> {
  return matchRawType(source, 'WeakRef')
}
