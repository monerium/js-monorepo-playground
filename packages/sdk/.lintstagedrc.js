module.exports = {
  '*.{js,jsx,ts,tsx}': ['turbo lint', 'turbo format'],
  '*.{json,md}': ['turbo format'],
  '*.{css,scss,sass}': ['turbo lint:style'],
};
