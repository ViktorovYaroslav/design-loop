# Independent review — designer-managed subagents

The user authorizes the primary designer to spawn review subagents autonomously. The designer owns all design/document mutations and review synthesis. Reviewers are read-only; they do not create directions, modify FigCraft, overwrite exports, alter shared files or spawn more agents. This permission covers design review, not external communications, development or unrelated delegation.

## Timing and scope
Run an independent pass before presenting checkpoint 2, and after product expansion before final delivery. At checkpoint 1 a short direction review is optional when it can resolve a real uncertainty. Do not spawn a reviewer for every component.

Normally use one reviewer with the highest-risk scope, or two with distinct scopes: visual craft/character and task/data/structure. Respect available concurrency; run sequentially when needed. Do not force a specific model/effort unless the user or applicable instructions require it. If delegation is unavailable, disclose the limitation; the author's self-review is not an independent review and the requirement remains unverified unless the user accepts that limitation.

## Independence and inputs
Use a fresh-context agent (fork_turns=none when supported). Pass only the active product brief, explicit style preference/selected-direction requirements, viewport assumptions, relevant task statements/data definitions, target document/frame IDs and current screenshots or paths. Do not pass author self-scores, previous reviewer conclusions, user praise, suspected answers or a proposed defect list. Give reviewers enough genuine constraints to avoid recommending a different product.

Prefer immutable current exports plus structural snapshots for parallel reviews. Capture the revision using file hashes/export names and frame IDs. If native inspection is needed, use explicit document IDs and read-only commands; do not switch selections, reload a dirty shared document or save. If a reviewer cannot access a live session, give saved exports/structure and disclose the reduced coverage. Let the designer remain the only writer. Findings apply to the inspected revision; do not quietly evaluate a moving target.

Each review assignment states scope, read-only boundary, available evidence, required result and that other agents may be active. Apply the installed Caveman communication skill to inter-agent messages when required by the workspace audience rules; persisted reports remain clear English, not compressed dialogue.

## Reviewer output
Prioritize a small set of concrete findings; no minimum finding quota. Each finding includes severity (blocker/major/minor), frame/layer or artifact location, observed evidence, why it affects the task/character/craft, and a suggested correction. Distinguish observation from inference and note unavailable checks. Report inspected screens/states and risks outside coverage. No generic praise, global approval from a small sample, or invented measurements.

Visual scope includes native-scale typography/spacing, relational insets/anchors, contrast, identity and media finish. Task/data scope includes independently inferred task routes, state/context clarity, realistic-case behavior, chart encodings, populations/denominators and editable structure as relevant to the product. Human usability and runtime behavior cannot be inferred from screenshots.

Include the selected character's visible expression beyond palette/radii, product/task-specific visual language, proportional card/detail footprints, useful disclosure, reader-facing copy and graphic finish. Where structural evidence exists, inspect representative repeated controls for actual auto layout/sizing or justified exceptions; screenshots alone cannot prove those properties. Review these as open questions, not a required finding list. Do not require novelty, photos, effects or complexity without a task/character reason.

## Designer response and recheck
Save the received review and designer disposition in docs/REVIEWS.md with reviewer ID, inspected revision, evidence paths, coverage and limitations. Mark findings accepted/fixed, rejected with evidence, or unresolved with impact. Do not manufacture a report if a tool/agent failed.

Fix accepted findings within the selected direction; discuss radical changes. Capture updated screenshots/structure. Send material fixes back to a reviewer for a focused recheck, without asking them to endorse the original author's score. Changed source components require representative-instance regression checks.

Limit the loop to two review/fix rounds per gate by default; if material issues remain, report them and keep the affected gate incomplete rather than looping indefinitely or declaring success. Blockers and major accepted issues affecting core goals must be corrected and rechecked before completion. Minor deferrals need an explicit rationale and impact; do not bury recognized defects under “future polish”. The user may explicitly accept a scoped limitation. No open issue is resolved by a self-score.
