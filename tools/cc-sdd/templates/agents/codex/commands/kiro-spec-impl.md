<meta>
description: Execute spec tasks using TDD methodology
argument-hint: <feature-name> [task-numbers]
arguments:
   feature-name: $1
   task-numbers: $2
</meta>
# Implementation Task Executor

Use the `kiro-spec-impl` skill to execute this command.

- Source of truth: `skills/kiro-spec-impl/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-spec-impl/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
