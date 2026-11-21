# Design Loop

An agent-driven, design-only workflow for Codex and FigCraft MCP: from a product idea to an editable, reviewed design system and screens.

The user brings an idea and chooses a visual character. The designer develops three paired directions, refines the selected one through focused passes, builds the system and expands the screens. Independent read-only reviews check visual craft, task clarity, data and file structure. The designer remains the only author.

This repository contains the reusable method, six skill packages and license notices. It does not contain the original laboratory's designs, datasets, screenshots, review history or user approvals.

## Get started

### Install in an existing project

Run one of these commands from the target project root. The CLI requires Node.js 20+ through npm, or Bun through `bunx --bun`. Both examples use the GitHub `main` branch. You can replace `main` with a tag or commit to pin the workflow.

```bash
npx --yes --package=github:ViktorovYaroslav/design-loop#main -- design-loop init
bunx --bun --package github:ViktorovYaroslav/design-loop#main design-loop init
```

Use the same launcher with `update` to refresh the managed copy.

```bash
npx --yes --prefer-online --package=github:ViktorovYaroslav/design-loop#main -- design-loop update
bunx --bun --package github:ViktorovYaroslav/design-loop#main design-loop update
```

The installer adds `.agents/skills/design-loop/` and creates `design/` at the project root. Invoke `$design-loop` in Codex to start or resume a design. The root `AGENTS.md` belongs to the project. The skill includes the shared workflow, companion references, the UI UX Pro Max recommendation script and the notices for bundled material. Web demos, browser scripts and Python caches are excluded from the installed skill. Connect FigCraft MCP separately before drawing.

### Choose an agent

`--agent codex` is the default. It installs a project skill for Codex and clients that discover `.agents/skills/`. Use `--agent claude` with both `init` and `update` to use `.claude/skills/design-loop/`, then invoke `/design-loop` in Claude Code.

```bash
npx --yes --package=github:ViktorovYaroslav/design-loop#main -- design-loop init --agent claude
bunx --bun --package github:ViktorovYaroslav/design-loop#main design-loop update --agent claude
```

To use both agents in one project, run `init` once for each. They share the project’s `design/` directory. Each command updates the skill for its selected agent. Connect FigCraft MCP in the client you use for design work.

`update` replaces the managed skill after checking for local edits and extra files. Design workspaces live under `design/<slug>/` with the `.figcraft` file at the workspace root. The project owns those files.

To use an unpublished local checkout, run `node /path/to/design-loop/bin/design-loop.mjs init` or `update` from the target project root.

### Use a standalone checkout

1. Clone this repository and open its folder in Codex:

   ```bash
   git clone https://github.com/ViktorovYaroslav/design-loop.git
   cd design-loop
   ```

2. Connect FigCraft MCP in your Codex environment. Connection details depend on your local FigCraft setup; no machine-specific server path, credentials or MCP configuration is bundled. Ask the agent to verify the connection before drawing. Python 3 is needed for the bundled UI UX Pro Max recommendation script.
3. Start a new conversation with the prompt below, replacing the workspace name and idea.

```text
Read AGENTS.md and workflow/FLOW.md.
Create a new isolated workspace at experiments/my-product.
My idea: <describe the product, audience and main purpose>.

Prepare the local brief, flow and state from the shared method. Keep the
documents compact and infer routine decisions; ask about material unknowns.
Verify FigCraft MCP, create and save a separate native design file, and keep
all generated assets, data and evidence inside this workspace.

Start with the style-character selector and wait for my answer. Use Taste
to develop three distinct directions within that character, each on two
complementary screens. Build through the progressive passes, inspect the
results and wait at the two user checkpoints. Apply the shared iconography,
layout, polish, realistic-validation and independent-review procedures.

Design only. Preserve other workspaces and report unavailable checks honestly.
```

The six companion skills live in `.agents/skills/` under the standalone or installed workflow root. Inspect the local `SKILL.md` paths if a client does not expose them in its selector.

## Workflow

1. Define product tasks, choose character (Restrained, Expressive / Fancy, or Balanced) and establish observable targets and viewports.
2. Study actual references for style, execution quality and task patterns.
3. Develop three paired visual directions, then wait for the user's selection.
4. Refine the selected pair, adaptations, difficult states and useful interaction intent. Review and fix material issues, then wait for sample approval.
5. Consolidate the design system and expand the required screen families.
6. Freeze features, polish, independently review and map original requirements to current evidence.

Construction proceeds through composition, visual language, content/graphics, components/craft, adaptation, motion intent and editorial comparison. These are internal passes, not additional user questionnaires. Technical correctness and character fit are assessed separately.

See [the full flow](workflow/FLOW.md), [progressive construction](workflow/PROGRESSIVE-BUILD.md), [visual polish](workflow/VISUAL-POLISH.md) and [independent review](workflow/INDEPENDENT-REVIEW.md).

## Repository and generated work

```text
.agents/skills/          Five pinned upstream packages + FigCraft File Craft
workflow/                Shared procedure and quality criteria
licenses/                Retained third-party licenses
dependencies.lock.json   Upstream repositories, source paths and revisions
AGENTS.md                Shared scope and execution rules

experiments/<slug>/      Created by the agent; ignored by this repository
  AGENTS.md
  docs/                  Brief, local flow, state, target and review records
  design/                Native .figcraft file and direction decisions
  data/                  Synthetic fixtures when needed
  assets/                This workspace's references and icon assets
  evidence/              Current exports and verification evidence
```

To resume, name the existing workspace and ask the agent to read its `docs/STATE.md`. Do not start a new cycle or reset a file merely because the context changed.

In an existing project, the installed skill directory is `LAB_ROOT` and workspaces live under the project root's `design/` directory. Invoke the skill and name the workspace in the start prompt.

## Skills and tools

Taste leads visual direction; frontend-design critiques specificity; UI UX Pro Max supports UX/system choices; Emil supports details and motion intent; Unslop audits concrete defects; FigCraft File Craft governs semantic structure and reusable layout. See [sources, roles and adaptation rules](workflow/SKILLS.md) and [the dependency lock](dependencies.lock.json). Upstream packages retain their supporting assets/scripts; bundled web/demo tooling does not authorize application development or make its browser gates part of this design-only flow.

FigCraft MCP is required to create native designs. Inspo MCP is optional for reference research. An existing browser connector can inspect public references read-only when live behavior matters; Playwright is not a default dependency. This repository installs/configures none of these tools and does not bundle frontend icon packages.

Controls use real library icon assets, Lucide by default, and persistent layout rules. Charts remain faithful to their data. Static screens, designed motion states, prototype playback, runtime checks and human usability observations are distinct evidence types.

## Updating and licensing

Upstream skills are vendored snapshots with sources and revisions in `dependencies.lock.json`. Maintainers update those pins deliberately. The `update` command installs the snapshots bundled with the requested Design Loop revision. Generated workspaces stay outside the managed installation.

Original material is available under [MIT](LICENSE), subject to the explicit third-party exclusions there. Vendored packages and attributed adaptations retain their own terms; see [third-party notices](THIRD-PARTY-NOTICES.md). Unslop is by Damir Sokolovsky under CC BY 4.0. Reference photographs, icons, fonts and demo assets may carry additional notices inside their upstream packages; inclusion is not a blanket license to reuse them in a product.
