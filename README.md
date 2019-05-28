# @paciolan/eslint-config

Paciolan ESLint default settings with Prettier.

## Install

```bash
npm install @paciolan/eslint-config eslint@ prettier eslint-plugin-prettier eslint-config-prettier
```

Create an `.eslintrc.yml` file:

```yaml
extends: ["@paciolan"]
```

## Rules

- ["prettier/prettier": "error"](https://github.com/prettier/eslint-config-prettier)
- ["no-unused-vars": "error"](https://eslint.org/docs/rules/no-unused-vars)
- ["no-undef": "error"](https://eslint.org/docs/rules/no-undef)
- ["max-lines-per-function": ["error", 20]](https://eslint.org/docs/rules/max-lines-per-function)

## Contributors

Joel Thoms
