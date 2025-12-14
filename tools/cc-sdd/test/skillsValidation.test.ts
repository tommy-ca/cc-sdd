import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, readFile, stat } from 'node:fs/promises';
import { describe, it, expect } from 'vitest';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillsRoot = path.resolve(__dirname, '..', 'templates', 'shared', 'skills');

const hyphenCase = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

type ParsedFrontmatter = {
  name?: string;
  description?: string;
  allowedTools?: string[];
};

const parseFrontmatter = (content: string): ParsedFrontmatter => {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const block = match[1];
  const lines = block.split('\n');
  const out: ParsedFrontmatter = { allowedTools: [] };
  let currentList: 'allowed-tools' | null = null;

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line) continue;
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (kv) {
      const [, key, value] = kv;
      currentList = null;
      if (key === 'name') out.name = value;
      if (key === 'description') out.description = value;
      if (key === 'allowed-tools') {
        out.allowedTools = [];
        currentList = 'allowed-tools';
      }
      continue;
    }
    const listItem = line.match(/^\s*-\s+(.+)$/);
    if (listItem && currentList === 'allowed-tools') {
      out.allowedTools?.push(listItem[1]);
    }
  }
  return out;
};

describe('skills frontmatter', () => {
  it('each SKILL.md has valid frontmatter and matches folder name', async () => {
    const entries = await readdir(skillsRoot);
    expect(entries.length).toBeGreaterThan(0);

    for (const entry of entries) {
      const dir = path.join(skillsRoot, entry);
      const info = await stat(dir);
      if (!info.isDirectory()) continue;

      const skillPath = path.join(dir, 'SKILL.md');
      const content = await readFile(skillPath, 'utf8');
      const fm = parseFrontmatter(content);

      expect(fm.name, `${entry}: name missing`).toBeTruthy();
      expect(fm.description, `${entry}: description missing`).toBeTruthy();
      expect(hyphenCase.test(fm.name || ''), `${entry}: name not hyphen-case`).toBe(true);
      expect(fm.name, `${entry}: folder/name mismatch`).toBe(entry);
      expect((fm.allowedTools ?? []).length, `${entry}: allowed-tools missing`).toBeGreaterThan(0);
    }
  });
});
