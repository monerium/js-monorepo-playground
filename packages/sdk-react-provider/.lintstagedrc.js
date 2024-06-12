module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm lint'],
  '*.{json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['pnpm lint:style'],
};
