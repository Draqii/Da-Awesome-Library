import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../source/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
              },
          },
      ],
    },{
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { 
            native: false, 
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false
                },
                {
                  name: 'removeDimensions',
                  active: true
                }
              ]
            }
          }
        },
      ],
      type: 'javascript/auto',
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
      }
    },{
      test: /\.s[ac]ss$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  importLoaders: 2,
              },
          },
          require.resolve("resolve-url-loader"),
          {
              loader: require.resolve("sass-loader"),
              options: {
                  // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                  implementation: require.resolve("node-sass"),
                  sourceMap: true,
                  sassOptions: {},
              },
          },
      ],
    },],
      }
    }),
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
