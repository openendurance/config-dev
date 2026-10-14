# @openendurance/config-prettier

Shared Prettier configuration for Open Endurance Initiative projects.

This package provides a small, stable formatting baseline that downstream repos can extend or replace as needed.

## Usage

CommonJS:

```js
const config = require("@openendurance/config-prettier");

module.exports = config;
```

ESM:

```js
import config from "@openendurance/config-prettier";

export default config;
```

## Defaults

| Setting         | Value   |
| --------------- | ------- |
| `endOfLine`     | `lf`    |
| `printWidth`    | `100`   |
| `semi`          | `true`  |
| `singleQuote`   | `false` |
| `tabWidth`      | `2`     |
| `trailingComma` | `all`   |
| `useTabs`       | `false` |

## Conventions

- Keep the shared config predictable and boring
- Prefer a small baseline over opinionated style choices that will be hard to unwind later
- Add new defaults only when multiple repos need the same formatting behavior
