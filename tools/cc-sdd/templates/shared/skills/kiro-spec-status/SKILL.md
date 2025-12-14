---
name: kiro-spec-status
description: Report specification status and next actions
allowed-tools:
  - Bash
  - Read
  - Glob
  - Write
  - Edit
  - MultiEdit
  - Update
metadata:
  agents: "claude-code,codex"
  phase: "status"
  inputs: "spec name"
  outputs: "status report"
---

## When to use
- Provide users with current phase, progress, and blockers for a spec.
- Offer next-step guidance across init, requirements, design, tasks, and implementation.

## Inputs
- Feature name for `{{KIRO_DIR}}/specs/<feature>/`.

## Outputs
- Concise status report with phase, approvals, outstanding actions, and blockers.
- References to relevant files and commands for next steps.

## Guidance
- Read `spec.json` plus existing phase artifacts; surface missing files clearly.
- Keep output succinct; emphasize actionable next commands.
