---
name: kiro-validate-gap
description: Analyze implementation gap between requirements and existing codebase
allowed-tools:
  - Bash
  - Glob
  - Grep
  - Read
  - Write
  - Edit
  - MultiEdit
  - WebSearch
  - WebFetch
metadata:
  agents: "claude-code,codex"
  phase: "discovery"
  inputs: "spec name"
  outputs: "gap analysis notes in research.md"
---

## When to use
- Early discovery before design to understand codebase fit for the feature.
- Need risks, missing capabilities, and integration points for planning.

## Inputs
- Feature name referencing `{{KIRO_DIR}}/specs/<feature>/`.

## Outputs
- Gap assessment captured in `research.md`; options for implementation approaches.
- Key risks and integration considerations surfaced for design.

## Guidance
- Load requirements and full steering context before analysis.
- Map existing patterns, identify deltas, and note research needed.
- Keep focus on understanding and options, not implementation.
