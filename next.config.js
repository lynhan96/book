const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  resolve: {
    alias: {
      "react/jsx-runtime": require.resolve("jsx-runtime"),
    },
  },
  modifyVars: {},
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  webpack(config) {
    return config;
  },
});
