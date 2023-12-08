import { matchRawType } from '../collocation/matchRawType'

export function isPromise(source: unknown): source is Promise<unknown> {
  return matchRawType(source, 'Promise')
}
