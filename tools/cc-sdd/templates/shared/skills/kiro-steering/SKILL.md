---
name: kiro-steering
description: Maintain steering documents as persistent project knowledge
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
  outputs: "{{KIRO_DIR}}/steering/*"
---

## When to use
- Bootstrap steering from codebase or keep steering in sync with evolving code.
- Preserve and update project patterns, principles, and decisions.

## Inputs
- Existing steering files (core and custom) and repository codebase.

## Outputs
- Updated `product.md`, `tech.md`, `structure.md`, and any custom steering files.
- Drift reports and additive updates that respect user customizations.

## Guidance
- Treat all steering files equally; never overwrite user custom content.
- Detect bootstrap vs sync mode; add context rather than replacing.
- Capture patterns and principles, not exhaustive inventories.
