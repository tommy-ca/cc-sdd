---
name: kiro-spec-impl
description: Execute implementation tasks with TDD based on approved specs
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - MultiEdit
  - Grep
  - Glob
  - LS
  - WebFetch
  - WebSearch
metadata:
  agents: "claude-code,codex"
  phase: "implementation"
  inputs: "spec name, optional task numbers"
  outputs: "code changes, tests, tasks.md updates"
---

## When to use
- After tasks are approved in `spec.json` and ready for execution.
- Need to deliver code via TDD while updating task status.

## Inputs
- Feature name; optional task numbers to scope execution.

## Outputs
- Implemented code and tests; tasks marked complete in `tasks.md`.
- Progress and approvals reflected in `spec.json`.

## Guidance
- Always read requirements, design, tasks, and steering before coding.
- Prioritize writing or updating tests before implementation; keep regressions out.
- Respect phased approvals and stop if tasks are not approved.
