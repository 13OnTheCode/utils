import type { UnknownFunction } from '@13onthecode/types'

import { matchRawType } from '../collocation/matchRawType'

import { isAsyncFunction } from './isAsyncFunction'

export function isFunction(source: unknown): source is UnknownFunction {
  return matchRawType(source, 'Function') || isAsyncFunction(source)
}
