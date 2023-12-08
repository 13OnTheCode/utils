import { matchRawType } from '../collocation/matchRawType'

export function isError(source: unknown): source is Error {
  return matchRawType(source, 'Error')
}
