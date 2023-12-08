import { isBun } from './isBun'
import { isDeno } from './isDeno'

export function isNode() {
  return (
    !isBun() &&
    !isDeno() &&
    'process' in globalThis &&
    'versions' in globalThis.process &&
    !!global.process.versions.node
  )
}
