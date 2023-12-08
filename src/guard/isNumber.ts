import { matchRawType } from '../collocation/matchRawType'

export function isNumber(source: unknown): source is number {
  return matchRawType(source, 'Number') && Number.isFinite(source)
}
