import type { UnknownArray, UnknownObject, Writable } from '@13onthecode/types'

import { isArray } from '../guard/isArray'
import { isArrayBuffer } from '../guard/isArrayBuffer'
import { isDataView } from '../guard/isDataView'
import { isDate } from '../guard/isDate'
import { isMap } from '../guard/isMap'
import { isObject } from '../guard/isObject'
import { isRegExp } from '../guard/isRegExp'
import { isSet } from '../guard/isSet'
import { isSymbol } from '../guard/isSymbol'
import { isTypedArray } from '../guard/isTypedArray'

export type CloneOptions = {
  mode?: 'deep' | 'shallow'
}

export function clone<T>(
  source: T,
  options?: CloneOptions
): T {
  let result = source as unknown

  const isDeep = options?.mode === 'deep'

  if (isArrayBuffer(source)) {
    result = new ArrayBuffer(source.byteLength)
  }

  if (isDataView(source) || isTypedArray(source)) {
    const { buffer, byteLength, byteOffset, constructor } = source
    result = new (constructor as new (...args: unknown[]) => T)(isDeep ? clone(buffer, options) : buffer, byteOffset, byteLength)
  }

  if (isDate(source)) {
    result = new Date(source)
  }

  if (isRegExp(source)) {
    result = new RegExp(source)
  }

  if (isSymbol(source)) {
    result = Symbol(source.description)
  }

  if (isSet(source)) {
    const clonedSet = new Set()

    for (const item of source) {
      clonedSet.add(item === source ? clonedSet : (isDeep ? clone(item, options) : item))
    }

    result = clonedSet
  }

  if (isMap(source)) {
    const clonedMap = new Map()

    for (const [key, value] of source) {
      clonedMap.set(key, value === source ? clonedMap : (isDeep ? clone(value, options) : value))
    }

    result = clonedMap
  }

  if (isArray(source)) {
    const clonedArray: Writable<UnknownArray> = []

    for (const item of source) {
      clonedArray.push(item === source ? clonedArray : (isDeep ? clone(item, options) : item))
    }

    result = clonedArray
  }

  if (isObject(source)) {
    const clonedObject: Writable<UnknownObject> = {}

    for (const [key, value] of Object.entries(source)) {
      clonedObject[key] = value === source ? clonedObject : (isDeep ? clone(value, options) : value)
    }

    result = clonedObject
  }

  return result as T
}
