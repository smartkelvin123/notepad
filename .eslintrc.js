module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  rules: {
    indent: ["error", 4],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
  },
  quotes: ["error", "single"],
  extends: "standard",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
