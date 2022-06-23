const path = require("path");
module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/creative/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/creative/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-tailwind-dark-mode",
    "@storybook/addon-backgrounds",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    config.resolve.alias = {
      "@/": path.resolve(__dirname, "../src/"),
    };

    return config;
  },
};
