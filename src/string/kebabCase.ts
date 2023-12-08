import { customCase } from './customCase'

export function kebabCase(input: string) {
  return customCase(input, (word) => word.toLowerCase(), { delimiter: '-' })
}
