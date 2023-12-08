import { getRawType } from './getRawType'

export function matchRawType(source: unknown, rawType: string) {
  return getRawType(source) === rawType
}
