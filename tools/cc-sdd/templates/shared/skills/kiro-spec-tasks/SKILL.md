---
name: kiro-spec-tasks
description: Generate implementation tasks from approved requirements and design
allowed-tools:
  - Read
  - Write
  - Edit
  - MultiEdit
  - Glob
  - Grep
metadata:
  agents: "claude-code,codex"
  phase: "tasks"
  inputs: "spec name"
  outputs: "{{KIRO_DIR}}/specs/<feature>/tasks.md,spec.json approvals"
---

## When to use
- After design is generated and approved for the feature.
- Need actionable tasks (1-3 hours each) to cover all requirements.

## Inputs
- Feature name for `{{KIRO_DIR}}/specs/<feature>/`.

## Outputs
- `tasks.md` with ordered, traceable work items; merge with existing tasks when present.
- Updated `spec.json` task phase metadata and approvals.

## Guidance
- Load requirements, design, and steering context; respect language settings.
- Use capability-focused task statements with clear acceptance checks.
- Support sequential mode when specified to preserve execution order.
