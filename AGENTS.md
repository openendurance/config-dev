# AGENTS.md

## What this repo is

Shared development configuration for Open Endurance Initiative repositories.

This repository replaces the older shared dev-config monorepo. It publishes a small set of reusable packages for TypeScript, Prettier, and Jest. There is no application runtime here — only shared configuration, documentation, and release plumbing.

**This repo has moderate blast radius relative to its size.** A change to a shared config package can affect many OEI repositories at once the next time they update their dependency range. Treat edits here with more care than the line count would suggest.

## Package layout

The package set is intentionally small and mirrored by directory name:

| Package                          | Purpose                        |
| -------------------------------- | ------------------------------ |
| `@openendurance/tsconfig`        | Shared TypeScript base configs |
| `@openendurance/prettier-config` | Shared Prettier configuration  |
| `@openendurance/jest-config`     | Shared Jest configuration      |

Package source code lives under `packages/<name>/src`.

Tests, when they exist, live next to the code they exercise in `src/__tests__`.

Biome remains repository-local for now and is not being centralized into a shared package.

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
- Root formatting: Prettier for markdown and YAML; Biome remains local for repo files that use it.
- Package code should use TypeScript and the workspace conventions already established in this repo.
- Do not add build or test infrastructure that is not actually needed for the packages being published.

## Releases

- Changesets drive versioning and release notes.
- Published packages use npm provenance.
- Changes to release plumbing, package names, or published files should be treated as sensitive.

## This is a public OSS repository

Apache-2.0 licensed. Contribution process, code of conduct, and security reporting are defined at the org level, not duplicated here.

<!-- BEGIN:turborepo-agent-rules -->

# This is NOT the Turborepo you know

Turborepo configuration, task behavior, and CLI commands can vary between installed versions and may differ from your training data. Resolve the `turbo` package from this file's directory or relevant workspace; in monorepos, it may not be visible from the repository root. For example, run `node -p "require.resolve('turbo/package.json')"` from a workspace that depends on `turbo`.

Read `docs/README.md` inside that installed package first, then read the relevant pages from its `docs/` directory before changing Turborepo configuration or commands. Heed deprecation notices. These bundled docs match the installed package version and are available without network access.

This block is written and re-added by `turbo` before repository-scoped commands when an AI agent is detected. In the Turborepo source repository, its template is defined in `crates/turborepo-cli/src/cli/agent_guidance.rs`. Removing the managed block while updates are enabled means a later qualifying invocation will add it again. Set `"agentGuidance": false` in the root `turbo.json` or `turbo.jsonc` to opt out; this does not remove an existing block. Keep the block committed with your work to avoid an uncommitted change on the next agent invocation.
<!-- END:turborepo-agent-rules -->
