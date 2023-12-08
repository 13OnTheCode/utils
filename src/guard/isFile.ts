import { matchRawType } from '../collocation/matchRawType'

export function isFile(source: unknown): source is File {
  return matchRawType(source, 'File')
}
