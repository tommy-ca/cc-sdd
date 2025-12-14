---
name: kiro-validate-design
description: Review technical design quality and readiness for implementation
allowed-tools:
  - Read
  - Glob
  - Grep
metadata:
  agents: "claude-code,codex"
  phase: "validation"
  inputs: "spec name"
  outputs: "design review summary"
---

## When to use
- After design is drafted to decide GO/NO-GO for implementation.
- Need concise review with strengths, issues, and actionable fixes.

## Inputs
- Feature name with `design.md`, `requirements.md`, and `spec.json` present.

## Outputs
- Review summary highlighting top issues (max 3), strengths, and decision.
- Clear guidance for fixes before tasks generation if needed.

## Guidance
- Load steering context to align patterns and constraints.
- Focus on architecture quality, risk, and completeness over re-writing design.
- Keep review concise and prioritized.
