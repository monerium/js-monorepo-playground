const path = require('path');

const buildNextEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildNextEslintCommand, 'turbo format'],
  '*.{json,md}': ['turbo format'],
  '*.{css,scss,sass}': ['turbo lint:style'],
};
