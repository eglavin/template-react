/**
 * https://prettier.io/docs/en/options.html
 */

module.exports = {
  arrowParens: 'always',
  printWidth: 90,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.test.{js,jsx,ts,tsx}'],
      options: {
        printWidth: 120,
      },
    },
    {
      files: ['*.html'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
