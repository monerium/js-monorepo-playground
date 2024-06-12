const rules = {
  'property-no-unknown': [
    true,
    {
      ignoreProperties: [
        // CSS Modules composition
        // https://github.com/css-modules/css-modules#composition
        'composes',
      ],
    },
  ],

  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: [
        // CSS Modules :global scope
        // https://github.com/css-modules/css-modules#exceptions
        'global',
        'local',
      ],
    },
  ],

  'custom-property-empty-line-before': null,

  // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
  'order/order': [
    'custom-properties',
    'dollar-variables',
    'declarations',
    'at-rules',
    'rules',
  ],

  // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
  'order/properties-order': [],

  'selector-class-pattern': null,
};

module.exports = {
  // The standard config based on a handful of CSS style guides
  // https://github.com/stylelint/stylelint-config-standard
  extends: [`stylelint-config-standard-scss`],
  plugins: [
    // stylelint plugin to sort CSS rules content with specified order
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
  ],
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.tsx'],
  rules,
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
      rules,
    },
  ],
};

// // stylelint configuration
// // https://stylelint.io/user-guide/configuration/

// module.exports = {
//   // The standard config based on a handful of CSS style guides
//   // https://github.com/stylelint/stylelint-config-standard
//   extends: [`stylelint-config-standard-scss`],
//   plugins: [
//     // stylelint plugin to sort CSS rules content with specified order
//     // https://github.com/hudochenkov/stylelint-order
//     'stylelint-order',
//   ],
//   ignoreFiles: ['**/*.js', '**/*.ts'],
//   rules,
//   overrides: [
//     {
//       files: '**/*.scss',
//       customSyntax: 'postcss-scss',
//       rules,
//     },
//   ],
// };
