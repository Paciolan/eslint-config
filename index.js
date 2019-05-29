module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "error",
    "no-undef": "error",
    "max-lines-per-function": ["warn", 20]
  },
  extends: ["plugin:prettier/recommended"]
};
