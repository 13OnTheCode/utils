import { node } from '@13onthecode/eslint-config'

export default [
  ...node,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 0
    }
  }
]
