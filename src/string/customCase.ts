const WORD_REGEX = /([\da-z])([A-Z])|([A-Z])([A-Z][a-z])/g

const NON_WORD_CHARS_REGEX = /[^\da-z]+/gi

export type CustomCaseOptions = {
  delimiter?: string
}

export type CustomCaseTransform = (word: string, index: number, words: string[]) => string

export function customCase(
  input: string,
  transform: CustomCaseTransform,
  options?: CustomCaseOptions
) {
  const { delimiter = '' } = options ?? {}

  return input
    .replaceAll(WORD_REGEX, '$1 $2')
    .replaceAll(NON_WORD_CHARS_REGEX, ' ')
    .trim()
    .split(' ')
    .map((word, index, words) => transform(word, index, words))
    .join(delimiter)
}
