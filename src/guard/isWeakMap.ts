import { matchRawType } from '../collocation/matchRawType'

export function isWeakMap(source: unknown): source is WeakMap<WeakKey, unknown> {
  return matchRawType(source, 'WeakMap')
}
