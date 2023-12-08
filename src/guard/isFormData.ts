import { matchRawType } from '../collocation/matchRawType'

export function isFormData(source: unknown): source is FormData {
  return matchRawType(source, 'FormData')
}
