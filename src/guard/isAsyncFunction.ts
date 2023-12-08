import type { UnknownAsyncFunction } from '@13onthecode/types'

import { matchRawType } from '../collocation/matchRawType'

export function isAsyncFunction(source: unknown): source is UnknownAsyncFunction {
  return matchRawType(source, 'AsyncFunction')
}
