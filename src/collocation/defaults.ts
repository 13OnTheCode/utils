import type { GetOptional, GetReadonly, Prettify, SetOptional, SetReadonly, UnknownObject, Writable } from '@13onthecode/types'

import { isObject } from '../guard/isObject'
import { isUndefined } from '../guard/isUndefined'

import { toEntries } from './toEntries'

export type Defaults<Source, DefaultValue = undefined> = (
  [Source, Exclude<Source, undefined>, DefaultValue] extends [infer S1, infer S2, infer D]
    ? [undefined] extends [D]
      ? S1
      : [D | S2] extends [UnknownObject]
        ? Prettify<SetReadonly<SetOptional<{
          [K in keyof D | keyof S2]: (
            K extends keyof S2 & keyof D
              ? Defaults<S2[K], D[K]>
              : D[K & keyof D] | S2[K & keyof S2]
          )
        },
        (keyof D & keyof GetOptional<D>) | (keyof S2 & keyof GetOptional<Omit<S2, keyof D>>)>,
        (keyof D & keyof GetReadonly<D>) | (keyof S2 & keyof GetReadonly<Omit<S2, keyof D>>)>
        >
        : [undefined] extends [S1]
          ? D | S2
          : S2
    : never
)

export function defaults<Source, DefaultValue = undefined>(
  source: Source,
  defaultValue: DefaultValue
): Defaults<Source, DefaultValue> {
  const result = isUndefined(source) ? defaultValue : source

  if (isObject(result) && isObject(defaultValue)) {
    const entries = toEntries(defaultValue)

    for (const [key, value] of entries) {
      (result as Writable<UnknownObject>)[key] = defaults(result[key], value)
    }
  }

  return result as Defaults<Source, DefaultValue>
}
