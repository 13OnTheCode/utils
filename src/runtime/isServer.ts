import { isDeno } from './isDeno'

export function isServer() {
  return globalThis.constructor.name !== 'Window' || isDeno()
}
