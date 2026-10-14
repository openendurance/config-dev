# GitHub Copilot Instructions

## What this repo is

Shared development configuration for Open Endurance Initiative repositories.

This repository publishes reusable configuration packages for TypeScript, Prettier, and Jest. It does not contain application runtime code. The package set is intentionally small and should stay focused on shared developer tooling rather than becoming a general-purpose utilities repo.

**This repo has moderate blast radius relative to its size.** A change to a shared config package can affect many OEI repositories at once the next time they update their dependency range. Treat edits here with more care than the line count would suggest.

## Package layout

The package set is intentionally mirrored by directory name:

| Package                          | Purpose                        |
| -------------------------------- | ------------------------------ |
| `@openendurance/tsconfig`        | Shared TypeScript base configs |
| `@openendurance/config-prettier` | Shared Prettier configuration  |
| `@openendurance/jest-config`     | Shared Jest configuration      |

Package source code lives in `packages/<name>/src`.

Tests, when they exist, live next to the code they exercise in `src/__tests__`.

Biome stays repository-local for now and is not being centralized into a shared package.

## Documentation

The `docs/` tree is the durable knowledge base for the repository.

- `docs/README.md` explains the documentation model
- `docs/TOC.md` is the canonical index
- `docs/adr/` is for immutable decisions
- `docs/arch/` is for current-state architecture and package contracts
- `docs/ops/` is for release and maintenance procedures
- `docs/generated/` is reserved for generated artifacts only
- `docs/registry/` is for continuously maintained tracking artifacts
- `docs/wiki/` is for living, evolving notes

## Branching and commits

- GitHub Flow: feature branches → PR into `develop` → `develop` → `main`.
- Breaking changes never land directly on `main`.
- Every commit requires both a DCO sign-off and a cryptographic signature.
- If generating commits on someone's behalf, check `git config --get commit.gpgsign` first and do not assume signing is configured.

## Tooling

- Package manager: `pnpm` only (`preinstall` enforces this).
- Root markdown and YAML formatting uses Prettier.
- Root file linting uses Biome where applicable.
- Package code should use TypeScript and follow the workspace conventions in this repository.
- Do not add build or test infrastructure that is not actually needed for the packages being published.

## Releases

- Changesets drive versioning and release notes.
- Published packages use npm provenance.
- Changes to release plumbing, package names, or published files should be treated as sensitive.

## Editorial posture

- Prefer minimal, targeted edits over rewrites.
- Keep docs synchronized with the actual package layout.
- If a change affects package boundaries or published behavior, update the docs in the same work item.
