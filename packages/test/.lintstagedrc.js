module.exports = {
  '*.{ts,tsx}': ['prettier --write', 'pnpm lint'],
  '*.{js,json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['pnpm lint:style'],
};
