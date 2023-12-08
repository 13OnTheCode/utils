import { matchRawType } from '../collocation/matchRawType'

export function isSymbol(source: unknown): source is symbol {
  return matchRawType(source, 'Symbol')
}
