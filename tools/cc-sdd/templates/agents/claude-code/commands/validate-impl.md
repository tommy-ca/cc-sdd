---
description: Validate implementation against requirements, design, and tasks
allowed-tools: Bash, Glob, Grep, Read, LS
argument-hint: [feature-name] [task-numbers]
---
# Implementation Validation

Use the `kiro-validate-impl` skill to execute this command.

- Source of truth: `skills/kiro-validate-impl/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-validate-impl/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
