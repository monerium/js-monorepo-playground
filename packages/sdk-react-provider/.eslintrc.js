/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
};

// {
//   root: true,
//   extends: ["@repo/eslint-config/react-internal.js"],
//   parser: "@typescript-eslint/parser",
//   // "ignorePatterns": ["!**/*"],
//   // "overrides": [
//   //   {
//   //     "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
//   //     "rules": {}
//   //   },
//   //   {
//   //     "files": ["*.ts", "*.tsx"],
//   //     "rules": {}
//   //   },
//   //   {
//   //     "files": ["*.js", "*.jsx"],
//   //     "rules": {}
//   //   }
//   // ]
// }
