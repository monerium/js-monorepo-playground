#

A recent shift in the Nextjs world to app router

# Styles

- Remove isomorphic-style-loader.
- Change styling sheets from `.less` to `.module.css`.
- It's no longer needed to import customMedia, it's globally available with `@csstools/postcss-global-data`.
- All comments need to be changed from `// comment` to `/* comment */`.
- Not pure selectors. For example:

```css
// less
.icon {
  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
  }

  img {
    width: 32px;
    height: 32px;
  }
}
.description {
  color: #000;
}
```

Becomes:

```css
/* css modules */
.icon :global(svg) {
  fill: #fff;
  width: 24px;
  height: 24px;
}
.icon img {
  width: 32px;
  height: 32px;
}
```

# Routing

One of the biggest changes is going from history to using the nextjs router.

# Client components

Add `"use client"` to all components rendered on client, example of client components:

- They use the router,
- they have on click events.
- they use useEffect, useState,

# Stuff to replace

validationTypes is `import { ValidationErrors } from '@monerium/types/validationTypes';`

# TODOs:

- App configsl
- layout.tsx - Google Analytics
