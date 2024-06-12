const path = require('path');

const buildNextEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': [buildNextEslintCommand],
  '*.{json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['pnpm lint:style'],
};
