/** @type {import('postcss-load-config').Config} */

const rfs = require('rfs');

module.exports = {
  extends: ['@repo/postcss-config/base.js'],
  plugins: [rfs({})],
};
