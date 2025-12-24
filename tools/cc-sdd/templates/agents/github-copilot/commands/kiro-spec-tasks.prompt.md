---
mode: 'agent'
description: Generate implementation tasks for a specification
---
<meta>
description: Generate implementation tasks for a specification
argument-hint: <feature-name:$1> [-y:$2]
</meta>
# Implementation Tasks Generator

Use the `kiro-spec-tasks` skill to execute this command.

- Source of truth: `skills/kiro-spec-tasks/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-spec-tasks/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
