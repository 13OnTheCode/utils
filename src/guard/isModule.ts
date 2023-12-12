import { matchRawType } from '../collocation/matchRawType'

export function isModule(source: unknown): source is NodeModule {
  return matchRawType(source, 'Module')
}
