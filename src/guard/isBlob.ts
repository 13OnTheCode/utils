import { matchRawType } from '../collocation/matchRawType'

export function isBlob(source: unknown): source is Blob {
  return matchRawType(source, 'Blob')
}
