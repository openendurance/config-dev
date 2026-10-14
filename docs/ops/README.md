# Operations

Operational reference documentation for `config-dev`.

## What Belongs Here

Documents that answer "how do we run, validate, and release this repository?" — release procedures, local validation, and maintenance workflows. These are reference docs for engineers and agents performing operational work.

This repo has no runtime system in the usual sense. "Operations" here means the release process for the shared config packages, how to validate a package change before publishing, and how to recover if a package release or consumer update goes wrong.

System structure belongs in `arch/`.

Decisions about operational approach belong in `adr/`.

## Contents

| Document | Purpose                                                                   |
| -------- | ------------------------------------------------------------------------- |
| None yet | Add operational pages as release and validation procedures are documented |

## Authorship

Human-maintained. Agents may append findings or incident notes as part of a work increment, but procedural changes require human review.

## Update Contract

Update when procedures change. An outdated runbook is an incident waiting to happen — if a procedure has drifted from the document, fix the document immediately.

If a significant operational decision was made, open an ADR before updating the affected document here.
