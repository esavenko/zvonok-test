import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    quotes: 'single',
    semi: false,
    endOfLine: 'auto',
  },
  typescript: true,
  vue: true,
  ignores: ['node_modules/*', '.github/', 'dist/'],
  rules: {
    'vue/valid-template-root': 0,
    'node/prefer-global/process': 0,
    'ts/no-empty-object-type': 0,
    'vue/ prefer-separate-static-class': 0,
    'antfu/ if-newline': 0,
    'antfu/ top-level-function': 0,
  },
})
