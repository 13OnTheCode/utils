import type { Primitive } from '@13onthecode/types'

import { isBigInt } from './isBigInt'
import { isBoolean } from './isBoolean'
import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { isString } from './isString'
import { isSymbol } from './isSymbol'
import { isUndefined } from './isUndefined'

export function isPrimitive(source: unknown): source is Primitive {
  return (
    isNull(source) ||
    isBigInt(source) ||
    isNumber(source) ||
    isString(source) ||
    isSymbol(source) ||
    isBoolean(source) ||
    isUndefined(source)
  )
}
