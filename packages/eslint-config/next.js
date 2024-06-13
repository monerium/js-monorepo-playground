const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    './base',
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'eslint-config-turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['only-warn'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
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
