import type { MergeSet, UnknownSet, Writable } from '@13onthecode/types'

export function mergeSet<
  Target extends UnknownSet,
  Source extends UnknownSet
>(
  target: Target,
  source: Source
): MergeSet<Target, Source> {
  for (const iterator of source) {
    (target as unknown as Writable<UnknownSet>).add(iterator)
  }

  return target as unknown as MergeSet<Target, Source>
}
