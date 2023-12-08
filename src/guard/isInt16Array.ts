import { matchRawType } from '../collocation/matchRawType'

export function isInt16Array(source: unknown): source is Int16Array {
  return matchRawType(source, 'Int16Array')
}
