# Documentation and Knowledge

Project documentation for `config-dev`.

This documentation set is the shared home for the repo's durable knowledge. It serves human and agent operators: engineers need a nearby source of truth for package boundaries, conventions, and maintenance guidance, and agents use it as context and guardrails for their work.

## Why This Exists

`config-dev` is the shared development-configuration monorepo for Open Endurance Initiative repositories. It publishes reusable configuration packages for TypeScript, Prettier, and Jest so downstream repos can extend a single source of truth instead of recreating local copies.

The top-level pages orient you, the reference sections explain how the repository works, and the wiki space captures living knowledge that is still being shaped.

## Structure

| Directory    | Purpose                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| `adr/`       | Architecture Decision Records — immutable once accepted; record why decisions were made               |
| `arch/`      | Current-state reference — package boundaries, contracts, and constraints; updated as the repo evolves |
| `generated/` | Agent-generated output — do not hand-edit; re-run the originating process instead                     |
| `ops/`       | Operational reference — release flow, local validation, and maintenance procedures                    |
| `registry/`  | Living registries — continuously updated tracking artifacts                                           |
| `wiki/`      | Living wiki space — working knowledge and evolving reference material                                 |

## Entry Point

Start with `TOC.md` for a navigable index of all documents.

## Update Contract

- `adr/` — append only; never modify an accepted ADR
- `arch/` — update in place as the system changes; keep current
- `generated/` — written by automation; do not edit manually
- `ops/` — update when operational procedures change
- `registry/` — update continuously as findings are logged or resolved
- `wiki/` — update as living knowledge is added or reshaped

## Conventions

- Paths within the documentation tree are relative to `/docs`; paths outside it are repo-relative
- Update `TOC.md` whenever a document is added, removed, or renamed
- Add a `TOC.md` entry for each new registry or ADR; leave section headers present even when empty
- Each subdirectory has its own README with authorship and update guidance
