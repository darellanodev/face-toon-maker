/** @type {import('stylelint').Config} */
export default {
  customSyntax: 'postcss-styled-syntax',
  ignoreFiles: ['dist/**/*'],
  rules: {
    'block-no-empty': true,
  },
}
