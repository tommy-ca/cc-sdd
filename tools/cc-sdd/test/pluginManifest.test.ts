import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { describe, it, expect } from 'vitest';
import { loadManifest } from '../src/manifest/loader.js';
import { processManifest } from '../src/manifest/processor.js';
import { buildTemplateContext } from '../src/template/context.js';
import type { AgentType } from '../src/resolvers/agentLayout.js';
import type { OSType } from '../src/resolvers/os.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolveFixture = (p: string) => path.resolve(__dirname, '..', p);

describe('claude-code plugin artifacts', () => {
  it('includes plugin artifacts and resolves paths', async () => {
    const manifestPath = resolveFixture('templates/manifests/claude-code.json');
    const manifest = await loadManifest(manifestPath);
    const agent: AgentType = 'claude-code';
    const ctx = buildTemplateContext({ agent, lang: 'en' });
    const artifacts = processManifest(manifest, agent, ctx, 'mac' as OSType);

    const ids = artifacts.map((a) => a.id);
    expect(ids).toContain('skills');
    expect(ids).toContain('skills_root');
    expect(ids).toContain('plugin_base');
    expect(ids).toContain('plugin_commands');
    expect(ids).toContain('plugin_skills');
    expect(ids).toContain('plugin_marketplace');

    const get = (id: string) => artifacts.find((a) => a.id === id) as any;

    expect(get('plugin_base')?.source).toEqual({
      type: 'templateDir',
      fromDir: 'templates/agents/claude-code/plugin',
      toDir: '.kiro/plugins/kiro-sdd',
    });
    expect(get('plugin_commands')?.source).toEqual({
      type: 'templateDir',
      fromDir: 'templates/agents/claude-code/commands',
      toDir: '.kiro/plugins/kiro-sdd/commands',
    });
    expect(get('plugin_skills')?.source).toEqual({
      type: 'templateDir',
      fromDir: 'templates/shared/skills',
      toDir: '.kiro/plugins/kiro-sdd/skills',
    });
    expect(get('plugin_marketplace')?.source).toEqual({
      type: 'templateDir',
      fromDir: 'templates/agents/claude-code/marketplace',
      toDir: '.kiro/marketplace',
    });
    expect(get('skills_root')?.source).toEqual({
      type: 'templateDir',
      fromDir: 'templates/shared/skills',
      toDir: 'skills',
    });
  });
});

describe('plugin manifests', () => {
  it('plugin.json is valid and minimally populated', async () => {
    const pluginPath = resolveFixture('templates/agents/claude-code/plugin/.claude-plugin/plugin.json');
    const raw = await readFile(pluginPath, 'utf8');
    const json = JSON.parse(raw);
    expect(json.name).toBe('kiro-sdd');
    expect(typeof json.description).toBe('string');
    expect(typeof json.version).toBe('string');
    expect(json.author?.name).toBeTruthy();
  });

  it('marketplace.json points to the plugin source', async () => {
    const mpPath = resolveFixture('templates/agents/claude-code/marketplace/.claude-plugin/marketplace.json');
    const raw = await readFile(mpPath, 'utf8');
    const json = JSON.parse(raw);
    const plugin = json.plugins?.[0];
    expect(json.name).toBe('kiro-sdd-marketplace');
    expect(plugin?.name).toBe('kiro-sdd');
    expect(plugin?.source).toBe('../plugins/kiro-sdd');
  });
});
