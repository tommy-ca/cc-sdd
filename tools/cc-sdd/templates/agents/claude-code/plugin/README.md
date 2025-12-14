# Kiro SDD Claude Code Plugin

Spec-driven development workflows for Claude Code: steering, requirements, design, tasks, implementation, and validation commands plus matching Agent Skills.

## Contents
- `.claude-plugin/plugin.json` — plugin metadata
- `commands/` — Kiro spec lifecycle commands
- `skills/` — Agent Skills backing the commands

## Local install (dev marketplace)
1) Add the dev marketplace from your repo root:
```
/plugin marketplace add .kiro/marketplace
```
2) Install the plugin:
```
/plugin install kiro-sdd@kiro-sdd-marketplace
```
3) Restart Claude Code, then run `/help` or try `/kiro:spec-init`.

## Notes
- Commands and skills align with the shared Kiro templates installed under `.claude/commands/kiro` and `.kiro/skills`.
- Plugin is self-contained for marketplace publishing; update version in `plugin.json` when shipping changes.
