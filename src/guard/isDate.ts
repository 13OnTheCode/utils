import { matchRawType } from '../collocation/matchRawType'

export function isDate(source: unknown): source is Date {
  return matchRawType(source, 'Date')
}
