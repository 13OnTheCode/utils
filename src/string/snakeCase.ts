import { customCase } from './customCase'

export function snakeCase(input: string) {
  return customCase(input, (word) => word.toLowerCase(), { delimiter: '_' })
}
