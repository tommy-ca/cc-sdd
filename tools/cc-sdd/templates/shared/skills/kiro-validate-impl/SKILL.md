---
name: kiro-validate-impl
description: Validate implementation against requirements, design, and tasks
allowed-tools:
  - Bash
  - Glob
  - Grep
  - Read
  - LS
metadata:
  agents: "claude-code,codex"
  phase: "validation"
  inputs: "spec name, optional task numbers"
  outputs: "validation summary, tasks.md updates"
---

## When to use
- After tasks are executed to verify coverage and quality.
- Need to confirm alignment with requirements, design, and tests.

## Inputs
- Feature name; optional task numbers to scope validation.

## Outputs
- Summary of findings, coverage against requirements, and status updates.
- Tasks marked completed when validated; regressions and gaps called out.

## Guidance
- Read spec metadata, design, tasks, and relevant code/tests before judging.
- Check tests exist and pass; flag missing coverage or regressions.
- Keep results actionable with clear next steps.
