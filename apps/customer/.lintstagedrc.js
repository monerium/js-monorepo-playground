const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')} && prettier --write`;

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand],
  '*.{js, json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['pnpm lint:style'],
};
