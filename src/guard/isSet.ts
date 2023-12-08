import type { UnknownSet } from '@13onthecode/types'

import { matchRawType } from '../collocation/matchRawType'

export function isSet(source: unknown): source is UnknownSet {
  return matchRawType(source, 'Set')
}
