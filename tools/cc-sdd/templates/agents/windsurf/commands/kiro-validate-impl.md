---
description: Validate implementation against requirements, design, and tasks
auto_execution_mode: 3
---
<meta>
description: Validate implementation against requirements, design, and tasks
argument-hint: [feature-name:$1] [task-numbers:$2]
</meta>
# Implementation Validation

Use the `kiro-validate-impl` skill to execute this command.

- Source of truth: `skills/kiro-validate-impl/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-validate-impl/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
