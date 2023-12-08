import { matchRawType } from '../collocation/matchRawType'

export function isDataView(source: unknown): source is DataView {
  return matchRawType(source, 'DataView')
}
