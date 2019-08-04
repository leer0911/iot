module.exports = {
  singleQuote: true,
  printWidth: 80,
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['constants.js', 'propTypes.js', '*.d.ts'],
      options: {
        printWidth: 200
      }
    }
  ]
};
