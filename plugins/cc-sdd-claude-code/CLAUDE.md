# AI-DLC and Spec-Driven Development

Kiro-style Spec Driven Development implementation on AI-DLC (AI Development Life Cycle)

## Installation

### Marketplace Installation (Recommended)

```bash
# Add the cc-sdd marketplace
claude /plugin marketplace add https://github.com/gotalab/cc-sdd

# Install the Claude Code plugin
claude /plugin install cc-sdd-claude-code

# Initialize settings and templates (run once)
claude /kiro:setup
```

### Alternative: Traditional CLI Installation

For full project setup with all features:

```bash
npx cc-sdd@latest --claude-code
```

> **Note**: The `/kiro:setup` command copies required templates and rules to your project. Run it once after marketplace installation.

## Project Context

### Paths
- Steering: `.kiro/steering/`
- Specs: `.kiro/specs/`

### Steering vs Specification

**Steering** (`.kiro/steering/`) - Guide AI with project-wide rules and context
**Specs** (`.kiro/specs/`) - Formalize development process for individual features

### Active Specifications
- Check `.kiro/specs/` for active specifications
- Use `/kiro:spec-status [feature-name]` to check progress

## Development Guidelines
- Think in English, generate responses in English. All Markdown content written to project files (e.g., requirements.md, design.md, tasks.md, research.md, validation reports) MUST be written in the target language configured for this specification (see spec.json.language).

## Minimal Workflow
- Phase 0 (optional): `/kiro:steering`, `/kiro:steering-custom`
- Phase 1 (Specification):
  - `/kiro:spec-init "description"`
  - `/kiro:spec-requirements {feature}`
  - `/kiro:validate-gap {feature}` (optional: for existing codebase)
  - `/kiro:spec-design {feature} [-y]`
  - `/kiro:validate-design {feature}` (optional: design review)
  - `/kiro:spec-tasks {feature} [-y]`
- Phase 2 (Implementation): `/kiro:spec-impl {feature} [tasks]`
  - `/kiro:validate-impl {feature}` (optional: after implementation)
- Progress check: `/kiro:spec-status {feature}` (use anytime)

## Development Rules
- 3-phase approval workflow: Requirements → Design → Tasks → Implementation
- Human review required each phase; use `-y` only for intentional fast-track
- Keep steering current and verify alignment with `/kiro:spec-status`
- Follow the user's instructions precisely, and within that scope act autonomously: gather the necessary context and complete the requested work end-to-end in this run, asking questions only when essential information is missing or the instructions are critically ambiguous.

## Steering Configuration
- Load entire `.kiro/steering/` as project memory
- Default files: `product.md`, `tech.md`, `structure.md`
- Custom files are supported (managed via `/kiro:steering-custom`)

## Troubleshooting

### Setup Issues
- **Command not found**: Ensure `/kiro:setup` completed successfully
- **Settings not found**: Run `/kiro:setup` to initialize project templates
- **Permission errors**: Check write permissions in project directory

### Workflow Issues
- **Spec commands fail**: Verify `.kiro/settings/` exists (run `/kiro:setup`)
- **Agent not responding**: Check agent permissions and tool access
- **Template errors**: Ensure all required template files are present

### Getting Help
- Check `.kiro/specs/` for active specifications
- Use `/kiro:spec-status [feature-name]` to check progress
- Review steering files in `.kiro/steering/` for context
