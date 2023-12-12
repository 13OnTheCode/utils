import { matchRawType } from '../collocation/matchRawType'

export function isURLSearchParams(source: unknown): source is URLSearchParams {
  return matchRawType(source, 'URLSearchParams')
}
