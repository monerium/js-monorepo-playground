/* eslint-disable global-require */

const pkg = require('../../package.json');

const isDebug = process.env.NODE_ENV !== 'production';

// CSS Nano options http://cssnano.co/
const minimizeCssOptions = {
  discardComments: { removeAll: true },
};

module.exports = {
  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  plugins: {
    // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
    // https://github.com/postcss/postcss-import
    'postcss-import': {},
    // W3C calc() function, e.g. div { height: calc(100px - 2em); }
    // https://github.com/postcss/postcss-calc
    'postcss-calc': {},
    // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
    // https://github.com/iamvdo/pleeease-filters
    'pleeease-filters': {},
    // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
    // https://github.com/robwierzbowski/node-pixrem
    pixrem: {},
    // Postcss flexbox bug fixer
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    'postcss-flexbugs-fixes': {},
    // PostCSS Preset Env, which allows you easily to use all the features in cssdb.
    // See what features in which stage in https://preset-env.cssdb.org/features
    // https://github.com/csstools/postcss-preset-env
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
      },
      browsers: pkg.browserslist,
      autoprefixer: { flexbox: 'no-2009' },
    },
    // Allows you to pass a list of files that will be globally available.
    // Has to be used before postcss-custom-media
    // We use this to get the custom-media globally available so we don't have to import it in every file.
    // https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-global-data#readme
    '@csstools/postcss-global-data': {
      files: ['../../libs/styles/src/customMedia.module.css'],
    },
    'postcss-custom-media': {},

    // CSS Nano http://cssnano.co/
    ...(isDebug
      ? {}
      : {
          cssnano: {
            preset: ['default', minimizeCssOptions],
          },
        }),
  },
};
