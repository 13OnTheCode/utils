import type { MergeMap, UnknownMap, Writable } from '@13onthecode/types'

export function mergeMap<
  Target extends UnknownMap,
  Source extends UnknownMap
>(
  target: Target,
  source: Source
): MergeMap<Target, Source> {
  for (const [sourceKey, sourceValue] of source) {
    (target as unknown as Writable<UnknownMap>).set(sourceKey, sourceValue)
  }

  return target as unknown as MergeMap<Target, Source>
}
