export function unCapitalize<T extends string>(input: T): Uncapitalize<T> {
  return input.charAt(0).toLowerCase() + input.slice(1) as Uncapitalize<T>
}
