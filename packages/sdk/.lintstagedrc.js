module.exports = {
  '*.{js,jsx,ts,tsx}': ['turbo lint'],
  '*.{json,md}': ['prettier --write'],
  '*.{css,scss,sass}': ['turbo lint:style'],
};
