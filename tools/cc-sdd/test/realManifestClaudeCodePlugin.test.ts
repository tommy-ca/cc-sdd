import { describe, it, expect } from 'vitest';
import { runCli } from '../src/index';
import { mkdtemp, mkdir, readFile, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const runtime = { platform: 'darwin' } as const;

const makeIO = () => {
  const logs: string[] = [];
  const errs: string[] = [];
  return {
    io: {
      log: (m: string) => logs.push(m),
      error: (m: string) => errs.push(m),
      exit: (_c: number) => {},
    },
    get logs() {
      return logs;
    },
    get errs() {
      return errs;
    },
  };
};

const mkTmpRepoLayout = async () => {
  const root = await mkdtemp(join(tmpdir(), 'ccsdd-plugin-manifest-'));
  const toolsDir = join(root, 'tools', 'cc-sdd');
  await mkdir(toolsDir, { recursive: true });
  return { root, toolsDir };
};

const exists = async (p: string) => {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
};

// vitest runs in tools/cc-sdd; repoToolsRoot is the real tools/cc-sdd directory
const repoToolsRoot = process.cwd();
const manifestPath = join(repoToolsRoot, 'templates/manifests/claude-code-plugin.json');

describe('claude-code plugin manifest', () => {
  it('dry-run prints plan for claude-code-plugin.json with plugin paths', async () => {
    const ctx = makeIO();
    const { toolsDir } = await mkTmpRepoLayout();

    const code = await runCli(
      ['--dry-run', '--lang', 'en', '--manifest', manifestPath, '--claude-code'],
      runtime,
      ctx.io,
      {},
      { cwd: toolsDir, templatesRoot: repoToolsRoot },
    );

    expect(code).toBe(0);
    const out = ctx.logs.join('\n');
    expect(out).toMatch(/Plan \(dry-run\)/);
    expect(out).toContain(
      '[templateDir] claude_code_plugin_commands: templates/agents/claude-code/commands -> ../../plugins/cc-sdd-claude-code/commands',
    );
    expect(out).toContain(
      '[templateDir] claude_code_plugin_agents_library: templates/agents/claude-code-agent/agents -> ../../plugins/cc-sdd-claude-code/agents',
    );
    expect(out).toContain(
      '[templateFile] claude_code_plugin_doc_main: templates/agents/claude-code/docs/CLAUDE.md -> ../../plugins/cc-sdd-claude-code/CLAUDE.md',
    );
  });

  it('apply writes plugin commands, agents, and CLAUDE.md into plugin directory', async () => {
    const { root, toolsDir } = await mkTmpRepoLayout();
    const ctx = makeIO();

    const code = await runCli(
      ['--lang', 'en', '--manifest', manifestPath, '--overwrite=force', '--claude-code'],
      runtime,
      ctx.io,
      {},
      { cwd: toolsDir, templatesRoot: repoToolsRoot },
    );

    expect(code).toBe(0);

    const pluginRoot = join(root, 'plugins', 'cc-sdd-claude-code');

    // Commands
    const cmdSpecInit = join(pluginRoot, 'commands/spec-init.md');
    expect(await exists(cmdSpecInit)).toBe(true);
    const cmdText = await readFile(cmdSpecInit, 'utf8');
    expect(cmdText).toMatch(/Spec Initialization/);

    // Agents
    const agentSpecImpl = join(pluginRoot, 'agents/spec-impl.md');
    expect(await exists(agentSpecImpl)).toBe(true);
    const agentText = await readFile(agentSpecImpl, 'utf8');
    expect(agentText).toMatch(/spec-tdd-impl Agent/);

    // Main doc
    const doc = join(pluginRoot, 'CLAUDE.md');
    expect(await exists(doc)).toBe(true);
    const docText = await readFile(doc, 'utf8');
    expect(docText).toMatch(/AI-DLC and Spec-Driven Development/);

    expect(ctx.logs.join('\n')).toMatch(/Setup completed: written=\d+, skipped=\d+/);
  });
}
);
