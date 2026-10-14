# Architecture

Current-state reference documentation for `config-dev`.

## What Belongs Here

Documents that answer "how does this repository work right now?" — package boundaries, contracts, constraints, and integration points. These are living documents; update them as the repo evolves.

This repo has no runtime architecture in the usual sense. What belongs here instead: how the shared config packages are structured, how downstream OEI repos consume them, how source layout and test layout are enforced, and how the package set fits together.

Decisions about why the repository is structured this way belong in `adr/`.

Operational procedures belong in `ops/`.

## Contents

| Document | Purpose                                                                      |
| -------- | ---------------------------------------------------------------------------- |
| None yet | Add architecture pages as the package layout and consumption model stabilize |

## Authorship

These documents are human-maintained. Agents may propose updates as part of a work increment, but a human operator is responsible for reviewing and committing changes. The structure of these documents is an organizational standard and should not be changed without explicit instruction from an operator.

## Update Contract

Update in place when the repository changes. If a change represents a significant architectural shift, open an ADR first — the ADR records the decision, this directory reflects the outcome.

Do not let these documents drift from the implementation. Stale architecture docs are worse than no docs — they actively mislead.
