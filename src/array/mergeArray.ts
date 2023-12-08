import type { MergeArray, MergeArrayOptions, UnknownArray, Writable } from '@13onthecode/types'

export function mergeArray<
  Target extends UnknownArray,
  Source extends UnknownArray,
  Options extends MergeArrayOptions
>(
  target: Target,
  source: Source,
  options?: Options
): MergeArray<Target, Source, Options> {
  const isReplace = options?.mode === 'replace'

  if (isReplace) {
    (target as unknown as Writable<UnknownArray>).splice(0, source.length, ...source)
  } else {
    (target as unknown as Writable<UnknownArray>).push(...source)
  }

  return target as unknown as MergeArray<Target, Source, Options>
}
