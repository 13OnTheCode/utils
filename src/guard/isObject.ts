import type { UnknownObject } from '@13onthecode/types'

import { matchRawType } from '../collocation/matchRawType'

export function isObject(source: unknown): source is UnknownObject {
  return matchRawType(source, 'Object')
}
