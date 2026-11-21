#!/usr/bin/env node

import { isUtf8 } from 'node:buffer';
import { createHash } from 'node:crypto';
import {
  cpSync, lstatSync, mkdirSync, readdirSync, readFileSync,
  realpathSync, renameSync, rmSync, writeFileSync,
} from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../', import.meta.url));
const project = realpathSync(process.cwd());
const skillPath = '.agents/skills/design-loop';
const destination = join(project, skillPath);
const lock = join(project, '.design-loop-install');
const manifest = '.install-manifest.json';
const payload = [
  '.agents/skills', 'workflow', 'licenses', 'AGENTS.md', 'dependencies.lock.json',
  'LICENSE', 'THIRD-PARTY-NOTICES.md',
];
const omittedPaths = [
  skillPath,
  '.agents/skills/taste-skill/assets',
  '.agents/skills/taste-skill/scripts',
  '.agents/skills/ui-ux-pro-max/scripts/tests',
  '.agents/skills/unslop/agents',
  '.agents/skills/unslop/scripts',
];

function includePayloadPath(path) {
  const relativePath = relative(source, path).split(sep).join('/');
  return !relativePath.split('/').includes('__pycache__')
    && !/\.py[cod]$/.test(relativePath)
    && !omittedPaths.some((omitted) => relativePath === omitted || relativePath.startsWith(`${omitted}/`));
}

function snapshot(directory, prefix = '') {
  const entries = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const relative = `${prefix}${entry.name}`;
    if (relative === manifest) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      entries.push([`${relative}/`, null], ...snapshot(path, `${relative}/`));
    } else if (entry.isFile()) {
      const bytes = readFileSync(path);
      const contents = !bytes.includes(0) && isUtf8(bytes)
        ? bytes.toString('utf8').replaceAll('\r\n', '\n')
        : bytes;
      entries.push([relative, createHash('sha256').update(contents).digest('hex')]);
    } else {
      throw new Error(`Unsupported entry in managed files: ${relative}`);
    }
  }
  return entries;
}

function unchangedInstallation() {
  const path = join(destination, manifest);
  if (!lstatSync(path, { throwIfNoEntry: false })?.isFile()) {
    throw new Error(`${skillPath} has no installer manifest. Move it aside before installing.`);
  }
  const saved = JSON.parse(readFileSync(path, 'utf8'));
  if (saved.format !== 1 || !Array.isArray(saved.entries)) {
    throw new Error('Unsupported installer manifest.');
  }
  const expected = new Map(saved.entries);
  const actual = new Map(snapshot(destination));
  const changed = [...new Set([...expected.keys(), ...actual.keys()])]
    .filter((name) => expected.get(name) !== actual.get(name));
  if (changed.length) {
    throw new Error(`Local changes in ${skillPath}: ${changed.slice(0, 5).join(', ')}. Save them outside the managed directory and restore the installed files before updating.`);
  }
}

function ensureDirectory(path) {
  const stat = lstatSync(path, { throwIfNoEntry: false });
  if (stat && !stat.isDirectory()) throw new Error(`Expected a regular directory at ${path}`);
  if (!stat) mkdirSync(path);
}

function install(command) {
  mkdirSync(lock);
  const next = join(lock, 'next');
  const previous = join(lock, 'previous');
  let keepBackup = false;
  try {
    if (command === 'init') {
      ensureDirectory(join(project, '.agents'));
      ensureDirectory(join(project, '.agents', 'skills'));
    } else {
      for (const parent of ['.agents', '.agents/skills']) {
        if (!lstatSync(join(project, parent), { throwIfNoEntry: false })?.isDirectory()) {
          throw new Error('No managed installation found. Run init first.');
        }
      }
    }
    const installed = lstatSync(destination, { throwIfNoEntry: false });
    if (command === 'init' && installed) {
      throw new Error(`${skillPath} already exists. Use update for a managed installation.`);
    }
    if (command === 'update' && !installed?.isDirectory()) {
      throw new Error('No managed installation found. Run init first.');
    }

    mkdirSync(next);
    for (const item of payload) {
      cpSync(join(source, item), join(next, item), {
        recursive: true,
        filter: includePayloadPath,
      });
    }
    cpSync(join(source, skillPath, 'SKILL.md'), join(next, 'SKILL.md'));
    writeFileSync(join(next, manifest), `${JSON.stringify({ format: 1, entries: snapshot(next) }, null, 2)}\n`);
    if (installed) unchangedInstallation();
    ensureDirectory(join(project, 'design'));
    if (installed) renameSync(destination, previous);
    try {
      renameSync(next, destination);
    } catch (error) {
      if (installed) {
        keepBackup = true;
        renameSync(previous, destination);
        keepBackup = false;
      }
      throw error;
    }
  } finally {
    if (keepBackup) {
      console.error(`Previous installation is preserved at ${previous}`);
    } else {
      rmSync(lock, { recursive: true });
    }
  }
}

const [command, ...args] = process.argv.slice(2);
const usage = 'Usage: design-loop <init|update> (run from the target project root)';
try {
  if (!command || command === '--help' || command === '-h') {
    console.log(usage);
  } else {
    if (!['init', 'update'].includes(command) || args.length) throw new Error(usage);
    install(command);
    console.log(`Design Loop ${command === 'init' ? 'installed' : 'updated'} in ${skillPath}/`);
  }
} catch (error) {
  console.error(`design-loop: ${error.message}`);
  process.exitCode = 1;
}
