import { capitalize } from './capitalize'
import { customCase } from './customCase'

export function capitalCase(input: string) {
  return customCase(input, (word) => capitalize(word), { delimiter: ' ' })
}
