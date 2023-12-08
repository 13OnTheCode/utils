import type { UnknownMap } from '@13onthecode/types'

import { matchRawType } from '../collocation/matchRawType'

export function isMap(source: unknown): source is UnknownMap {
  return matchRawType(source, 'Map')
}
