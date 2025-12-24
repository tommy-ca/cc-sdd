---
description: Generate implementation tasks for a specification
allowed-tools: Read, Write, Edit, MultiEdit, Glob, Grep
argument-hint: <feature-name> [-y] [--sequential]
---
# Implementation Tasks Generator

Use the `kiro-spec-tasks` skill to execute this command.

- Source of truth: `skills/kiro-spec-tasks/SKILL.md` (preferred) or `{{KIRO_DIR}}/skills/kiro-spec-tasks/SKILL.md` or `{{KIRO_DIR}}/plugins/kiro-sdd/skills/kiro-spec-tasks/SKILL.md`.
- Inputs: pass this command's arguments directly into the skill.
- Follow the skill's steps and output format exactly; do not add extra behavior.
- If the skill file is missing, report the missing path and stop.
