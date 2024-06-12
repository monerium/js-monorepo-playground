const path = require('path');

const buildNextEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  // 'apps/customer/**/*.{js,jsx,ts,tsx}': [buildNextEslintCommand],
  // '*.{js,jsx,ts,tsx}': ['pnpm run lint --'],
  '*.{js,ts,tsx,json,md}': ['pnpm run format --'],
  // '*.{css,scss,sass}': ['pnpm run lint:style --'],
};
