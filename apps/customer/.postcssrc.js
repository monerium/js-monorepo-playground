/** @type {import('postcss-load-config').Config} */

const rfs = require('rfs');
const base = require('@repo/postcss-config/base.js');

module.exports = {
  ...base,
  plugins: [...base.plugins, 'rfs'],
};
