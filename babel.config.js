// @flow
const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: isTest ? "lib" : "es",
        style: "css"
      }
    ]
  ],
  presets: [
    "@babel/preset-react",
    "@babel/preset-flow",
    [
      "@babel/preset-env",
      {
        corejs: 3,
        useBuiltIns: "entry",
        modules: false
      }
    ]
  ]
};
