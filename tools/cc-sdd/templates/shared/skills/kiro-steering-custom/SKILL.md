---
name: kiro-steering-custom
description: Create and maintain custom steering documents for specialized contexts
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - MultiEdit
  - Glob
  - Grep
  - LS
metadata:
  agents: "claude-code,codex"
  category: "steering"
  outputs: "{{KIRO_DIR}}/steering/custom-*"
---

## When to use
- Need domain- or team-specific steering beyond core product/tech/structure files.
- Capture specialized patterns, constraints, or playbooks.

## Inputs
- Existing steering context and domain knowledge from the user or repo.

## Outputs
- New or updated custom steering files (e.g., `custom-*.md`) kept alongside core steering.

## Guidance
- Follow the same granularity and additive principles as core steering.
- Keep content concise and focused on reusable guidance, not status updates.
- Preserve user edits; avoid overwriting existing custom documents.
