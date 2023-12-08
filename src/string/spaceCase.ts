import { customCase } from './customCase'

export function spaceCase(input: string) {
  return customCase(input, (word) => word.toLowerCase(), { delimiter: ' ' })
}
