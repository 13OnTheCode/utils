import { isDeno } from './isDeno'

export function isBrowser() {
  return globalThis.constructor.name === 'Window' && !isDeno()
}
