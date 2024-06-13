/** @type {import('typedoc').TypeDocOptions} */

// https://typedoc.org/options/

module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  name: 'Monerium SDK',
  out: 'static',
  githubPages: true,
  includeVersion: true,
  cleanOutputDir: true,
  searchInComments: true,
  entryPointStrategy: 'packages',
  entryPoints: ['src/index.ts'],
  kindSortOrder: ['Class', 'Method', 'Function', 'Interface', 'Enum', 'Module'],
  titleLink: 'https://www.npmjs.com/package/@monerium/sdk',
  tsconfig: 'tsconfig.json',
  excludePrivate: true,
  navigationLinks: {
    'monerium.com': 'https://monerium.com/',
    'monerium.app': 'https://monerium.app/',
  },
  sidebarLinks: {
    NPM: 'https://www.npmjs.com/package/@monerium/sdk',
    Issues: 'https://github.com/monerium/js-monorepo/issues',
    'Source code':
      'https://github.com/monerium/js-monorepo/tree/main/packages/sdk',
    'Developer portal': 'https://monerium.dev/',
    'API documentation': 'https://monerium.dev/api-docs',
    '': '',
  },
  entryPointStrategy: 'expand',

  // customCss: './docs/style.css',
};
