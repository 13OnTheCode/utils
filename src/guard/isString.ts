import { matchRawType } from '../collocation/matchRawType'

export function isString(source: unknown): source is string {
  return matchRawType(source, 'String')
}
