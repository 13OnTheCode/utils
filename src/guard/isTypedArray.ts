import type { TypedArray } from '@13onthecode/types'

import { isBigInt64Array } from './isBigInt64Array'
import { isBigUint64Array } from './isBigUint64Array'
import { isFloat32Array } from './isFloat32Array'
import { isFloat64Array } from './isFloat64Array'
import { isInt16Array } from './isInt16Array'
import { isInt32Array } from './isInt32Array'
import { isInt8Array } from './isInt8Array'
import { isUint16Array } from './isUint16Array'
import { isUint32Array } from './isUint32Array'
import { isUint8Array } from './isUint8Array'
import { isUint8ClampedArray } from './isUint8ClampedArray'

export function isTypedArray(source: unknown): source is TypedArray {
  return (
    isBigInt64Array(source) ||
    isBigUint64Array(source) ||
    isFloat32Array(source) ||
    isFloat64Array(source) ||
    isInt8Array(source) ||
    isInt16Array(source) ||
    isInt32Array(source) ||
    isUint8Array(source) ||
    isUint16Array(source) ||
    isUint32Array(source) ||
    isUint8ClampedArray(source)
  )
}
