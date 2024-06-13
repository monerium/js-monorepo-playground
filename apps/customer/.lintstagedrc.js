const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --dir . --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': ['prettier --write', buildEslintCommand],
  '*.{js, json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['pnpm lint:style'],
};
