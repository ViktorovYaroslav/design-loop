---
name: design-loop
description: Create, refine, or resume editable FigCraft designs using the Design Loop workflow, from visual direction choices through sample approval, validation, and handoff. Use when the user invokes $design-loop or explicitly asks to use this workflow for a design project.
---

# Design Loop

Read `AGENTS.md` and `workflow/FLOW.md` in `LAB_ROOT` for the stages and scope. In a consuming project, `LAB_ROOT` is this skill directory. In the standalone Design Loop repository, `LAB_ROOT` is the repository root.

In a consuming project, start a new workspace under the project root at `design/<slug>/` when asked to create a design. Save the native `.figcraft` file in that workspace alongside its `docs/`, `assets/`, and `evidence/` directories. Store direction decisions under the workspace's `design/` subdirectory as specified by the shared flow. For existing work, use the workspace the user named and read its `AGENTS.md` and `docs/STATE.md` first.

Use FigCraft MCP for the editable design. Ask for the visual character before research for a new iteration, then work through the direction-selection and refined-sample checkpoints. Follow any consuming-project instructions that apply to the task. Read bundled companion skills and validation procedures at the stages that use them.
