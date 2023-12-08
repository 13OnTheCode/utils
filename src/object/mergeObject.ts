import type { MergeObject, MergeObjectOptions, UnknownObject, Writable } from '@13onthecode/types'

import { toEntries } from '../collocation/toEntries'
import { isObject } from '../guard/isObject'

export function mergeObject<
  Target extends UnknownObject,
  Source extends UnknownObject,
  Options extends MergeObjectOptions
>(
  target: Target,
  source: Source,
  options?: Options
): MergeObject<Target, Source, Options> {
  const isDeep = options?.mode === 'deep'
  const sourceEntries = toEntries(source)

  for (const [sourceKey, sourceValue] of sourceEntries) {
    const targetValue = target[sourceKey];

    (target as Writable<UnknownObject>)[sourceKey] = isDeep && isObject(targetValue) && isObject(sourceValue)
      ? mergeObject(targetValue, sourceValue, options)
      : sourceValue
  }

  return target as unknown as MergeObject<Target, Source, Options>
}
