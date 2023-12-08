import { capitalize } from './capitalize'
import { customCase } from './customCase'

export function pascalCase(input: string) {
  return customCase(input, (word) => capitalize(word))
}
