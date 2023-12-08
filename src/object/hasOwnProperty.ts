import type { UnknownObject } from '@13onthecode/types'

export function hasOwnPropert(
  object: UnknownObject,
  propertyKey: PropertyKey
) {
  return Object.prototype.hasOwnProperty.call(object, propertyKey)
}
