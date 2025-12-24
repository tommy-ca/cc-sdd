<meta>
description: Generate comprehensive requirements for a specification
argument-hint: <feature-name>
arguments:
   feature-name: $1
</meta>
# Requirements Generation

Use the `kiro-spec-requirements` skill to execute this command.

- Source of truth: `skills/kiro-spec-requirements/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-spec-requirements/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
