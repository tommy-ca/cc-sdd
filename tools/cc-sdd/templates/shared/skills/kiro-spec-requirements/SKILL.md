---
name: kiro-spec-requirements
description: Generate EARS-style requirements for a Kiro specification
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
  phase: "requirements"
  inputs: "spec name"
  outputs: "{{KIRO_DIR}}/specs/<feature>/requirements.md,spec.json updates"
---

## When to use
- Requirements phase after spec initialization is complete.
- Need complete, testable acceptance criteria in EARS format tied to steering context.

## Inputs
- Feature name referencing `{{KIRO_DIR}}/specs/<feature>/`.

## Outputs
- Updated `requirements.md` structured per `settings/templates/specs/requirements.md`.
- `spec.json` metadata updated for approvals and timestamps.

## Guidance
- Load full steering context (`product.md`, `tech.md`, `structure.md`, plus custom files).
- Follow `settings/rules/ears-format.md`; keep requirements language consistent with `spec.json.language`.
- No design or implementation decisions; focus on verifiable behaviors and constraints.
