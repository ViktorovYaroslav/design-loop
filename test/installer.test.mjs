import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, rmdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const cli = fileURLToPath(new URL('../bin/design-loop.mjs', import.meta.url));

test('installs and updates the managed copy while preserving project files', (t) => {
  const cwd = mkdtempSync(join(tmpdir(), 'design-loop-test-'));
  t.after(() => rmSync(cwd, { force: true, recursive: true }));
  const run = (command) => spawnSync(process.execPath, [cli, command], { cwd, encoding: 'utf8' });
  const agents = join(cwd, 'AGENTS.md');
  const managed = join(cwd, '.agents', 'skills', 'design-loop');
  const flow = join(managed, 'workflow', 'FLOW.md');
  const existingInstructions = '# Existing project\r\n\r\nKeep these rules.\r\n';
  writeFileSync(agents, existingInstructions);
  mkdirSync(join(cwd, 'design'));
  writeFileSync(join(cwd, 'design', 'draft.figcraft'), 'Project-owned draft');

  assert.notEqual(run('update').status, 0);
  mkdirSync(managed, { recursive: true });
  assert.notEqual(run('init').status, 0);
  rmdirSync(managed);

  const init = run('init');
  assert.equal(init.status, 0, init.stderr);
  assert.ok(existsSync(join(managed, '.agents', 'skills', 'unslop', 'SKILL.md')));
  assert.match(readFileSync(join(managed, 'SKILL.md'), 'utf8'), /^---\r?\nname: design-loop\r?\n/);
  assert.ok(existsSync(join(managed, 'licenses', 'unslop-LICENSE')));
  assert.equal(existsSync(join(managed, '.agents', 'skills', 'taste-skill', 'assets')), false);
  assert.equal(existsSync(join(cwd, 'licenses')), false);
  assert.equal(existsSync(join(cwd, '.design-loop')), false);
  assert.equal(readFileSync(agents, 'utf8'), existingInstructions);

  const update = run('update');
  assert.equal(update.status, 0, update.stderr);
  assert.equal(readFileSync(agents, 'utf8'), existingInstructions);
  assert.equal(readFileSync(join(cwd, 'design', 'draft.figcraft'), 'utf8'), 'Project-owned draft');

  writeFileSync(flow, 'Local modifications');
  const modified = run('update');
  assert.notEqual(modified.status, 0);
  assert.match(modified.stderr, /workflow\/FLOW\.md/);
  assert.equal(readFileSync(flow, 'utf8'), 'Local modifications');
});

test('update can remove retired bundle files and add files from a new revision', (t) => {
  const scratch = mkdtempSync(join(tmpdir(), 'design-loop-revisions-'));
  t.after(() => rmSync(scratch, { force: true, recursive: true }));
  const bundle = join(scratch, 'bundle');
  const cwd = join(scratch, 'project');
  mkdirSync(cwd);
  for (const directory of ['bin', 'workflow', 'licenses', '.agents/skills/design-loop']) {
    mkdirSync(join(bundle, directory), { recursive: true });
  }
  const bundledCli = join(bundle, 'bin', 'design-loop.mjs');
  copyFileSync(cli, bundledCli);
  for (const file of ['AGENTS.md', 'dependencies.lock.json', 'LICENSE', 'THIRD-PARTY-NOTICES.md']) {
    writeFileSync(join(bundle, file), 'fixture');
  }
  writeFileSync(join(bundle, '.agents', 'skills', 'design-loop', 'SKILL.md'), 'fixture skill');
  const run = (command) => spawnSync(process.execPath, [bundledCli, command], { cwd, encoding: 'utf8' });
  const managed = join(cwd, '.agents', 'skills', 'design-loop', 'workflow');
  const oldFile = join('workflow', 'old.md');
  writeFileSync(join(bundle, oldFile), 'first revision\n');
  const init = run('init');
  assert.equal(init.status, 0, init.stderr);
  assert.deepEqual(readdirSync(join(cwd, 'design')), []);
  assert.equal(existsSync(join(cwd, 'AGENTS.md')), false);

  writeFileSync(join(managed, 'old.md'), 'first revision\r\n');
  rmSync(join(bundle, oldFile));
  writeFileSync(join(bundle, 'workflow', 'new.md'), 'second revision');
  const update = run('update');
  assert.equal(update.status, 0, update.stderr);
  assert.equal(existsSync(join(managed, 'old.md')), false);
  assert.equal(readFileSync(join(managed, 'new.md'), 'utf8'), 'second revision');

  writeFileSync(join(managed, 'project-notes.md'), 'Keep this');
  const extra = run('update');
  assert.notEqual(extra.status, 0);
  assert.match(extra.stderr, /workflow\/project-notes\.md/);
  assert.equal(readFileSync(join(managed, 'project-notes.md'), 'utf8'), 'Keep this');
});

test('agent selection installs and updates only the chosen project skill', (t) => {
  const cwd = mkdtempSync(join(tmpdir(), 'design-loop-agents-'));
  t.after(() => rmSync(cwd, { force: true, recursive: true }));
  const run = (...args) => spawnSync(process.execPath, [cli, ...args], { cwd, encoding: 'utf8' });
  const codex = join(cwd, '.agents', 'skills', 'design-loop');
  const claude = join(cwd, '.claude', 'skills', 'design-loop');

  const invalid = run('init', '--agent', 'other');
  assert.notEqual(invalid.status, 0);
  assert.match(invalid.stderr, /codex.*claude/);
  assert.deepEqual(readdirSync(cwd), []);

  const initClaude = run('init', '--agent=claude');
  assert.equal(initClaude.status, 0, initClaude.stderr);
  assert.equal(existsSync(codex), false);
  assert.match(readFileSync(join(claude, 'SKILL.md'), 'utf8'), /name: design-loop/);
  assert.equal(existsSync(join(cwd, 'CLAUDE.md')), false);
  assert.notEqual(run('update').status, 0);

  const initCodex = run('init', '--agent', 'codex');
  assert.equal(initCodex.status, 0, initCodex.stderr);
  const codexFlow = join(codex, 'workflow', 'FLOW.md');
  writeFileSync(codexFlow, 'Codex local changes');
  const updateClaude = run('update', '--agent', 'claude');
  assert.equal(updateClaude.status, 0, updateClaude.stderr);
  assert.equal(readFileSync(codexFlow, 'utf8'), 'Codex local changes');
});
