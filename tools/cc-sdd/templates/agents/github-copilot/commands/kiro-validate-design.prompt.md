---
mode: 'agent'
description: Interactive technical design quality review and validation
---
<meta>
description: Interactive technical design quality review and validation
argument-hint: <feature-name:$1>
</meta>
# Technical Design Validation

Use the `kiro-validate-design` skill to execute this command.

- Source of truth: `skills/kiro-validate-design/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-validate-design/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
