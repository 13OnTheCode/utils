import type { Entries, GetKeys, GetValues, Split, UnknownArray, UnknownMap, UnknownObject, UnknownSet } from '@13onthecode/types'

import { isArray } from '../guard/isArray'
import { isMap } from '../guard/isMap'
import { isSet } from '../guard/isSet'

export function toEntries<T extends string>(source: T): (
  T extends `${infer S}`
    ? [GetKeys<Split<S>>, GetValues<Split<S>>][]
    : T extends string
      ? [string, string][]
      : never
)

export function toEntries<T extends UnknownArray | UnknownMap | UnknownSet>(source: T): (
  Entries<T> extends (infer R)[]
    ? IterableIterator<R>
    : never
)

export function toEntries<T extends UnknownObject>(source: T): Entries<T>

export function toEntries<T>(source: T): []

export function toEntries<T>(source: T) {
  return (
    isArray(source) || isMap(source) || isSet(source)
      ? source.entries()
      : Object.entries(source as UnknownObject)
  ) as unknown
}
