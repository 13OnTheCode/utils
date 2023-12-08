import { matchRawType } from '../collocation/matchRawType'

export function isRegExp(source: unknown): source is RegExp {
  return matchRawType(source, 'RegExp')
}
