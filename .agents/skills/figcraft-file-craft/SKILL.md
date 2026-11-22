---
name: figcraft-file-craft
description: Build and maintain editable FigCraft layer structures with semantic containers, clear names, reusable components and verified layout. Use while creating screens or tidying a FigCraft document; complements visual design without choosing its style.
---

# FigCraft File Craft

Keep the layer tree understandable and safe to edit. Preserve the selected visual direction, product copy and existing authorization. Use FigCraft MCP; do not assume the Figma Plugin API works in FigCraft.

## Organize the document by page role

Plan the page map before drawing. Use these roles in a new file, adapted to the scope and existing project conventions:

| Page | Contains |
|---|---|
| `Brief` | Product goal, scope, and links or pointers to the primary frames when the project needs a cover. |
| `Directions` | Candidate pairs and any comparison variants. Group by candidate. |
| `Foundations` | Color, type, spacing, layout rules, and relevant styles or variables. |
| `Components` | Canonical UI kit sources, organized by family with representative variants. |
| `Screens` | Current deliverable screens, grouped by journey with viewport sizes together. |
| `States` | Alternate states, overlays, and stress cases, grouped by the screen they support. |
| `Archive` | Superseded work worth retaining. Add when needed. |

Create pages as their contents become relevant. Give each visible deliverable one canonical home. Use stable frame names such as `Plan the shot / Desktop / 1440`; keep the compact frame with its screen family. Preserve saved prototypes and source/component links when organizing existing work. Record the page map and primary frame IDs in the existing design handoff so a reader can find the current prototype, component sources and supporting states directly. Verify the page map and a representative screen subtree through FigCraft before checkpoint 2 and final delivery.

## Build structure as you draw

- Give each meaningful entity one parent: button, field, tab, card, stop row, navigation or action group. Keep its label/icon/content inside that parent, not scattered beside it under the screen.
- Prefer a frame with auto layout for UI containers. A button's fill, border and radius usually belong to its frame; its children are `Icon` and `Label`. Avoid a separate background rectangle when the parent can render it.
- Use groups for artwork whose parts move together without layout behavior. Keep intentional absolute positioning for map markers, route paths, overlays and artwork; do not force them into a linear layout.
- Nest by function: screen → section/entity → content. Add wrappers only when they own layout, clipping, visuals, interaction or a meaningful editing boundary. Neither a flat pile nor redundant single-child chains are desirable.
- For anchored UI, encode the intended relationship to its parent: sidebar footer padding/bottom constraints, aligned action edges and shared section axes. Compare those insets visually at relevant viewport heights; equal edge padding is a candidate, not an unconditional rule. Do not anchor sidebar identity to the height of a tall content export by accident.
- Name an entity when creating it. Basic containment and naming apply even during direction exploration; a complete reusable library can wait until samples are approved.

## Encode control layout instead of placing every child

For ordinary repeated controls (buttons, navigation rows, tabs and icon/label actions), use a semantic frame with auto layout and explicit padding, gap, alignment and sizing. A containing frame alone is not a layout rule. Fixed child coordinates require a functional reason, such as an intentional overlay, a supported-tool limitation or an isolated optical correction; drawing a static sample is not sufficient reason. Do not force chart marks, map positions or artwork into auto layout.

Discover current commands using list_commands. Use layout.add and node.set layout properties for persistent relationships; use align.hcenter/vcenter/edge commands and distribute/arrange commands for suitable one-off arrangements. These commands align bounds, not necessarily visible glyphs. textAlign centers text within its own box; it does not center that box in its parent. Do not give an icon and a text frame the same y and assume they share a vertical center when their heights differ.

For a horizontal icon/label control, start with crossAlign=center, a deliberate gap and appropriate hug/fill sizing. Choose main-axis alignment by role: navigation labels normally align left, while a button may center the combined icon/label group. Confirm child order when adding auto layout; preserve component links. Apply constraints/anchoring to the outer control where needed. Use a reusable source for recurring controls rather than aligning every copy separately.

Inspect the actual layout property, padding and sizing after construction. Render the source and representative instances at 100%, check a longer label and a relevant alternate size in an isolated variant, then make only justified optical adjustments. A geometric center is a starting point, not proof of optical balance. Record exceptions and tool limitations in existing design/polish notes; no extra report per control is required.

## Name by purpose, in English

Use concise role names: `Route map`, `Selected stop`, `Trip summary`, `Time field`, `Save action`, with child roles such as `Label`, `Icon`, `Title`, `Description` and `Value`. Preserve Ukrainian UI text in text content; the layer name describes its role.

Screens may use `Plan / Mobile / 390`; component families may use `Button/Primary` or `Stop/Row`. Follow established project conventions. Use properties such as State, Size and Label for actual variation where supported. Do not encode CSS classes, raw dimensions/colors or every ancestor into ordinary layer names. Same-role children may share names in different containers; siblings should be distinguishable when they represent different things. Use returned node IDs for mutations, not names as unique identifiers.

Default names such as `rectangle`, `Frame 42` or `vector` are cleanup candidates when they carry UI meaning. Do not waste effort naming every path inside an icon: name the icon's container and meaningful subparts.

## Reuse at the appropriate stage

Before creating a repeated control, inspect existing components. Reuse compatible instances rather than drawing disconnected copies. Promote recurring buttons, inputs, tabs, stop rows and cards into components as the direction stabilizes. Keep the library proportional to actual use; do not generate unused variant combinations.

Expose useful text/boolean/variant properties when supported. Preserve instance links and edit the source component for shared changes. Do not detach instances merely to rename or reposition internal layers. Use styles and semantic variable bindings where the system already defines them; this skill does not require a full token system before early visual exploration.

## Tidy existing work without visual regressions

1. Inspect the target subtree, including node types, bounds, visibility, layout, component links and interactions. Capture a baseline screenshot for structural refactoring.
2. Identify specific findings: detached entity parts, ambiguous names, avoidable copies, redundant wrappers, fixed widths that may need fill, and obsolete layers.
3. Apply small related changes. Use `list_commands` to verify current schemas for `object.group`, `object.convertToFrame`, `node.reparent`, `node.set`, `layout.add`, component and instance operations. Use the explicit document ID where supported. FigCraft frame-child coordinates are parent-relative; auto layout can reposition children. Do not assume reparenting or automatic layout suggestions preserve every visual detail.
4. Reinspect nesting, bounds, component links, property overrides, bindings and prototype targets. Examine a new screenshot against the baseline. Revert or correct unintended movement, clipping and broken links before proceeding.

Reuse the current task's authorization for routine naming and organization. Do not introduce per-layer approval gates. If ownership or intended behavior is genuinely unclear, report the affected item rather than guessing.

Never equate hidden with obsolete. A hidden layer may be a component state, override or prototype target. Remove only confirmed leftovers within scope, and inspect references first; if references cannot be checked, retain and report the uncertainty. Never flatten artwork or replace editable screens with screenshots to make the tree look simpler.

## Verify and report

Check the actual tree, not just the canvas: meaningful entities have a parent; their children and names are coherent; repeated elements use intended sources; no unnecessary wrapper chain was introduced; prototype targets and overrides remain valid. Inspect a longer label and representative instances after changing component structure, using an isolated sample if needed rather than altering approved copy.

Summarize findings, changes, representative layer paths/IDs, structural checks and screenshot comparisons. State which checks were unavailable. Do not claim the file was cleaned merely because this skill was installed or all nodes were renamed. Structural quality complements visual polish and does not replace it.

## Sources and adaptation

Original project guidance informed by:

- [Figma: Structure your file](https://developers.figma.com/docs/figma-mcp-server/structure-figma-file/) — semantic names, components, variables and auto layout.
- [Figma: Guide to auto layout](https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout-in-Figma) — container-based layout.
- [OpenAI: figma-generate-library](https://github.com/openai/skills/blob/main/skills/.curated/figma-generate-library/SKILL.md) — inspect existing libraries, properties/bindings and structural plus visual validation. Its codebase, Figma API and per-component checkpoint workflow are not imported.
- [dmnng: clean-layers](https://github.com/dmnng/figma-agent-skills/blob/main/skills/clean-layers/SKILL.md) — hidden-layer/reference caution, wrapper review and fixed/fill candidates. FigCraft API discovery replaces Figma-specific scripts; no blanket hidden-layer deletion or markup-style naming.

FigCraft command availability was inspected during authoring. Discover schemas again when executing; no Figma-to-FigCraft API compatibility is assumed.
