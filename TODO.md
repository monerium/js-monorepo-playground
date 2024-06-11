Use changeset for publishable packages

Add commitcli
Add precondition hooks - husky.
Add CI/CD - github actions
https://turbo.build/repo/docs/guides/ci-vendors/github-actions

Add auto arrange imports

# Customer

- Add stylelint
- Add auto arrange imports

# SDK

- activate publish
  https://github.com/monerium/js-sdk/blob/main/libs/sdk/.yarnrc.yml
  https://turbo.build/repo/docs/guides/publishing-libraries
- activate tests
  https://turbo.build/repo/docs/guides/tools/jest
  https://github.com/monerium/js-sdk/blob/main/libs/sdk/jest.config.ts
- update packagejson
  https://github.com/monerium/js-sdk/blob/main/libs/sdk/package.json

- loadingBalances doesn't work

# SDK React Provider

- activate tests!!!
- activate linter
  https://turbo.build/repo/docs/guides/tools/eslint

- Today we do a fetch for everything as soon as we know the user is authenticated. This is not ideal, it gives the user no control over what is fetched and when. We should change this so that we only fetch what is absolutely necessary and let the user decide when to fetch the rest.
  Add storybook package.

# Other

Syncpack?
https://jamiemason.github.io/syncpack/
