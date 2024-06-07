/** @type {import('postcss-load-config').Config} */
import rfs from "rfs";

const config = {
  plugins: [
    "postcss-import",

    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    rfs({}),
  ],
};

export default config;
