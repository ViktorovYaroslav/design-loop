import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, rmdirSync, writeFileSync } from 'node:fs';
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
  const managed = join(cwd, '.design-loop');
  const flow = join(managed, 'workflow', 'FLOW.md');
  const existingInstructions = '# Existing project\r\n\r\nKeep these rules.\r\n';
  writeFileSync(agents, existingInstructions);
  mkdirSync(join(cwd, 'experiments'));
  writeFileSync(join(cwd, 'experiments', 'draft.md'), 'Project-owned draft');

  assert.notEqual(run('update').status, 0);
  mkdirSync(managed);
  assert.notEqual(run('init').status, 0);
  rmdirSync(managed);

  const init = run('init');
  assert.equal(init.status, 0, init.stderr);
  assert.ok(existsSync(join(managed, '.agents', 'skills', 'unslop', 'SKILL.md')));
  assert.ok(existsSync(join(managed, 'LICENSE')));
  const installedInstructions = readFileSync(agents, 'utf8');
  assert.ok(installedInstructions.startsWith(existingInstructions));
  assert.match(installedInstructions, /\.design-loop\/AGENTS\.md/);

  const update = run('update');
  assert.equal(update.status, 0, update.stderr);
  assert.equal(readFileSync(agents, 'utf8'), installedInstructions);
  assert.equal(readFileSync(join(cwd, 'experiments', 'draft.md'), 'utf8'), 'Project-owned draft');

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
  for (const directory of ['bin', 'workflow', 'licenses', '.agents/skills']) {
    mkdirSync(join(bundle, directory), { recursive: true });
  }
  const bundledCli = join(bundle, 'bin', 'design-loop.mjs');
  copyFileSync(cli, bundledCli);
  for (const file of ['AGENTS.md', 'dependencies.lock.json', 'LICENSE', 'THIRD-PARTY-NOTICES.md']) {
    writeFileSync(join(bundle, file), 'fixture');
  }
  const run = (command) => spawnSync(process.execPath, [bundledCli, command], { cwd, encoding: 'utf8' });
  const managed = join(cwd, '.design-loop', 'workflow');
  const oldFile = join('workflow', 'old.md');
  writeFileSync(join(bundle, oldFile), 'first revision\n');
  const init = run('init');
  assert.equal(init.status, 0, init.stderr);

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
