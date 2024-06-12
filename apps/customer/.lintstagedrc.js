const path = require('path');

const buildEslintCommand = (filenames) =>
  `pnpm next lint --fix --dir ${process.cwd()} --file ${filenames.map((f) => path.relative(f)).join(' --file ')} --`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'git add --force'],
  // '*.{json,md}': ['prettier --write'],
  // '*.{css,scss,sass}': ['pnpm lint:style'],
};
