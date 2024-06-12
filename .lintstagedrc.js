module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm lint'],
  '*.{json,md}': ['pnpm format'],
  '*.{css,scss,sass}': ['pnpm lint:style'],
};
