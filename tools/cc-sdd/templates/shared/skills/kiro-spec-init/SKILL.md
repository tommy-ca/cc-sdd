---
name: kiro-spec-init
description: Initialize a new Kiro specification from a project description
allowed-tools:
  - Bash
  - Read
  - Write
  - Glob
metadata:
  agents: "claude-code,codex"
  phase: "init"
  outputs: "{{KIRO_DIR}}/specs/<feature>/spec.json,requirements.md"
---

## When to use
- Start a new spec-driven feature from a plain text description.
- Generate a unique feature name and scaffold the spec directory.

## Inputs
- Project description text.

## Outputs
- `{{KIRO_DIR}}/specs/<feature>/spec.json` and `requirements.md` seeded from templates.
- Feature name normalized and deduplicated (append numeric suffix on conflicts).

## Guidance
- Keep strict phase separation: no requirements/design/tasks beyond the initial stubs.
- Use templates at `{{KIRO_DIR}}/settings/templates/specs/init.json` and `requirements-init.md`.
- Record the language and timestamps per template; avoid implementation details.
