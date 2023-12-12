import { matchRawType } from '../collocation/matchRawType'

export function isReadableStream(source: unknown): source is ReadableStream {
  return matchRawType(source, 'ReadableStream')
}
