import type { UnknownArray } from '@13onthecode/types'

import { matchRawType } from '../collocation/matchRawType'

export function isArray(source: unknown): source is UnknownArray {
  return matchRawType(source, 'Array')
}
