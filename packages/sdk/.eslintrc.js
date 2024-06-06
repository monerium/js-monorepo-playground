/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/node-package.js"],
  parser: "@typescript-eslint/parser",
};
