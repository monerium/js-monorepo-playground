module.exports = {
  '*.{ts,tsx}': ['pnpm lint --', 'prettier --write'],
  '*.{js, json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['pnpm lint:style'],
};
