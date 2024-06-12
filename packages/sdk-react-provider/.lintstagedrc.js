module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm lint'],
  '*.{json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['turbo lint:style'],
};
