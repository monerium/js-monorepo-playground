/** @type {import("eslint").Linter.Config} */

module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^path',
            '^react$',
            '^react-dom$',
            '^next',
            '^viem',
            '^wagmi',
            '^@rainbowkit',
            '^classnames$',
            '^\\u0000', // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^@?\\w',
            '^@mui',
          ],
          ['^@monerium'],
          [
            '^(app|src|components|utils|services|hooks|config|types)(/.*|$)',
            // Anything that starts with a dot.
            '^\\.',
          ],
          ['^.+\\.(png|svg)$', '^.+\\.css$', '^.+\\.scss$'],
        ],
      },
    ],
  },
};
