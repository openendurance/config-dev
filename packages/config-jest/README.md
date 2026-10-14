# @openendurance/config-jest

Shared Jest configuration for Open Endurance Initiative projects.

This package provides a small default config and a helper that maps TypeScript path aliases into Jest's `moduleNameMapper`, which is the part that usually trips projects up.

## Usage

Install the matching test dependencies in the consuming project first:

```sh
pnpm add -D jest@^30.4.2 ts-jest@^29.4.11 typescript@^6.0.3
```

```js
const { createJestConfig } = require("@openendurance/config-jest");

module.exports = createJestConfig({
	tsconfigPath: "<rootDir>/tsconfig.json",
});
```

## What It Does

- Sets up `ts-jest` for TypeScript test files
- Infers Jest aliases from the `compilerOptions.paths` section of the chosen tsconfig file
- Keeps the default environment simple so consumers can override to `jsdom` or something more specific when needed

## Options

| Option             | Purpose                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| `tsconfigPath`     | Path to the tsconfig file whose path aliases should be mapped into Jest |
| `testEnvironment`  | Jest environment to use; defaults to `node`                             |
| `moduleNameMapper` | Additional or overriding Jest module name mappings                      |
| `transform`        | Optional custom transform overrides                                     |

## Conventions

- Keep the default config minimal and predictable
- Use the helper when you need TypeScript aliases in Jest
- Override locally for framework-specific needs like `jsdom`, React Native, or Electron renderer tests
