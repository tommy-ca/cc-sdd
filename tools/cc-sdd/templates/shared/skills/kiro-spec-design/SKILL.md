---
name: kiro-spec-design
description: Produce technical design from approved requirements and steering context
allowed-tools:
  - Bash
  - Glob
  - Grep
  - LS
  - Read
  - Write
  - Edit
  - MultiEdit
  - Update
  - WebSearch
  - WebFetch
metadata:
  agents: "claude-code,codex"
  phase: "design"
  inputs: "spec name"
  outputs: "{{KIRO_DIR}}/specs/<feature>/design.md,spec.json approvals"
---

## When to use
- After requirements are approved and stored in `requirements.md`.
- Need architecture, interfaces, and rationale before task planning.

## Inputs
- Feature name for `{{KIRO_DIR}}/specs/<feature>/`.

## Outputs
- `design.md` following `settings/templates/specs/design.md`.
- Updated `spec.json` design phase metadata and approvals.
- Discovery notes persisted to `research.md`.

## Guidance
- Run appropriate discovery depth (full/light/minimal) per feature complexity.
- Enforce template structure, numeric requirement IDs, and language from `spec.json`.
- Focus on architecture and interfaces; do not emit implementation code.
