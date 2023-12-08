import { capitalize } from './capitalize'
import { customCase } from './customCase'

export function camelCase(input: string) {
  return customCase(input, (word, index) => index === 0 ? word.toLowerCase() : capitalize(word))
}
