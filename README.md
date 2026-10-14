# config-dev

Shared development configuration for Open Endurance Initiative repositories.

This repository packages the common TypeScript, Prettier, and Jest configuration that OEI repositories can consume, while keeping Biome configuration local to each consumer repo.

## Packages

| Package                            | Purpose                                                      |
| ---------------------------------- | ------------------------------------------------------------ |
| `@openendurance/config-typescript` | Shared TypeScript base configs and package-specific variants |
| `@openendurance/config-prettier`   | Shared Prettier configuration                                |
| `@openendurance/config-jest`       | Shared Jest configuration                                    |

## Repository Layout

| Path          | Purpose                                                 |
| ------------- | ------------------------------------------------------- |
| `packages/`   | Published config packages                               |
| `docs/`       | Durable project documentation and knowledge             |
| `.changeset/` | Release notes and versioning metadata                   |
| `.github/`    | Repo automation, templates, instructions, and workflows |

## Conventions

- Package source code lives in `packages/<name>/src`
- Tests, when needed, live alongside source in `src/__tests__`
- Package directory names mirror package names
- Biome remains repo-local in downstream consumers until a shared package is justified

## Documentation

Start with [docs/README.md](docs/README.md) and [docs/TOC.md](docs/TOC.md).

## License

Licensed under the [Apache License, Version 2.0](./LICENSE).

```
SPDX-License-Identifier: Apache-2.0
```

---

<div align="center">
	Made with 💙 in Colorado, USA
</div>
<br />
<div align="center">
	Copyright © 2026 <a href="https://algorythmic.com">Algorythmic, LLC</a>
</div>
