module.exports = {
    printWidth: 120,
    tabWidth: 2,
    singleQuote: true,
    bracketSpacing: true,
    trailingComma: 'all',
    jsxSingleQuote: false,
    overrides: [
      {
        // These files may be run as-is in IE 11 and must not have ES5-incompatible trailing commas
        files: ['*.html', '*.htm'],
        options: {
          trailingComma: 'es5',
        },
      },
    ],
  };