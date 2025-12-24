---
description: Analyze implementation gap between requirements and existing codebase
allowed-tools: Bash, Glob, Grep, Read, Write, Edit, MultiEdit, WebSearch, WebFetch
argument-hint: <feature-name>
---
# Implementation Gap Validation

Use the `kiro-validate-gap` skill to execute this command.

- Source of truth: `skills/kiro-validate-gap/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-validate-gap/SKILL.md` or `{{KIRO_DIR}}/plugins/kiro-sdd/skills/kiro-validate-gap/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
