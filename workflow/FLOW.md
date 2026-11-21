# Shared design workflow — visual character and professional execution

## 0. Establish the starting state
Resolve LAB_ROOT and EXPERIMENT_ROOT through root AGENTS. Read the active experiment's STATE. Artifact paths below resolve inside EXPERIMENT_ROOT; skill paths resolve inside LAB_ROOT. The active local FLOW governs screen types, sizes and subject matter.

Read STATE. For an explicitly requested fresh cycle, verify RESET first; never reset an ongoing design automatically. Keep only the product idea across resets. Report leftover artifacts and unavailable checks honestly; do not bypass rejected deletions. This is FigCraft design work with one primary author and authorized read-only review subagents, without application development or product browser runtime. Read-only live-reference research is allowed under REFERENCE-RESEARCH.md.

The user need not know the desired appearance. Form visual hypotheses independently and ask only about necessary product facts and constraints.

## 0.5. Select style character
Read STYLE-CHARACTER.md and ask one concise selector: Restrained, Expressive / Fancy, or Balanced. Explain that fonts, theme and specific art direction remain the agent's responsibility. If the user already explicitly chose for this iteration, record that instead of asking again. If they explicitly delegate, choose and document the delegation. Otherwise wait for the answer before visual hypotheses/research; data and scope inspection may continue. Record the preference and references in the active docs/STYLE-PREFERENCE.md. Never infer a choice just from uploaded examples.

For a new iteration on an existing design, preserve the previous baseline and define the target file/variant before visual edits. No reset or redesign is triggered by this process update.

## 0.6. Choose viewport and layout strategy
Read VIEWPORT-STRATEGY.md. The agent chooses and briefly explains screen-filling, bounded-content or hybrid layout, primary viewport and smaller checks. Consider 1920×1080 for full-screen desktop tools; do not force every website or mobile app into that format. Specify scrolling and fixed/bottom-anchored regions, distinguish viewport vs full-page exports, and respect existing approved sizes. Record the rationale in the active DESIGN/DIRECTION documentation. This is a routine agent decision, not another mandatory user questionnaire.

## 0.7. Plan realistic validation and user tasks
Read REALISTIC-VALIDATION.md and TASK-WALKTHROUGH.md. Define 3–5 task goals/start states and applicable stress cases before finalizing sample components. Keep the baseline unchanged; prepare coherent data/content variants and expected invariants. Plan native-scale viewport/fold checks, not only attractive full-page exports. Record cases in the active data/STRESS-CASES.md and findings/task coverage in docs/VALIDATION.md. Human observation is optional; do not claim it occurred when only agents inspected static states.

## 1. Form visual hypotheses with Taste

First follow DESIGN-TARGET.md to draft the compact docs/TARGET.md from the idea, selected character, tasks and viewport. Define observable goals and stable screen/state IDs. The user need not supply a detailed visual specification; assumptions and routine art-direction decisions belong to the designer. Refine the target through existing checkpoints, without adding a new mandatory approval step.
Read Taste SKILL.md and copy.md, copy-voice.md, system.md, layout-v4.md and sections.md. Open photos.md, moments.md and relevant sections-library recipes as needed. Taste leads visual work throughout the cycle, not only at startup. Adapt website-specific instructions according to AGENTS.

Propose three hypotheses within the selected character; do not use the slots as one restrained, one expressive and one balanced option. For each define the intended impression, first point of attention, distinctive visual device, and balance between emotional appeal and practical task completion. “Modern, clean, usable” is not a direction. Subject matter does not prescribe a palette.

## 2. Analyze references through Taste
Use the selected character to choose references, and distinguish UI treatment from presentation/mockup effects. Examine images from 3–5 strong references, using Taste materials and external sources where useful. Include references selected for execution quality, not just the product category. Do not copy a brand wholesale.

Follow REFERENCE-RESEARCH.md. Inspo MCP is optional when available; it already supplies archive screenshots and does not require Playwright for static research. Use a capable existing browser connector only when actual live-reference behavior matters. Distinguish style inspiration from quality benchmarks and task examples. Never claim motion observation from a static image.

Consult component examples from the brief's existing system or relevant libraries when a complex control matters to a core task. Carry the chosen pattern and required states into the samples. Apply the FigCraft reuse checks in REFERENCE-RESEARCH before adopting a ready-made design component.

In RESEARCH record each source URL/path, the image actually viewed, how scale/hierarchy/type/density/imagery work, and the principle adapted to this product. A reference name is not analysis. Connect a concrete Taste recipe or principle to a decision and a screenshot. Reading template source is allowed; creating HTML solely to render examples is outside scope. Report unavailable images honestly.

## 3. Develop three directions on two screens each

Use PROGRESSIVE-BUILD.md: establish composition with realistic content, then develop visual language, finish graphics/content, and refine sample components/craft. Compare screenshots after focused passes; do not execute a whole screen as one unchecked batch. All candidate pairs must be visually convincing before checkpoint 1. The passes are internal work, not new user gates.

Choose the primary icon family through ICONOGRAPHY.md and a contextual color-area budget through VISUAL-BALANCE.md. Default standard UI icons to actual Lucide SVGs unless a justified alternative fits better. Record asset provenance and exact package mapping; do not hand-draw substitutes for standard icons. Proportions guide visual hierarchy, not formula compliance.
Read the local figcraft-file-craft skill before building. Create named semantic containers immediately: a control's label/icon belongs inside its frame; related artwork belongs inside a meaningful group. Use suitable auto layout and stable node IDs. Early exploration does not require a full library, but it does require an understandable tree. Inspect existing controls before drawing copies.

Use the same product content in all directions. Each direction includes two desktop screens representing complementary tasks from the active brief: six representative screens, not a complete product or isolated decorative heroes.

Vary composition, typographic character, imagery and hierarchy, not just color. The visual idea must survive across both screens rather than depend on one map or photograph. Replace placeholders before presentation. Select imagery or data graphics for relevance, quality and clarity. For analytical products, charts and tables may lead; photography is not mandatory. Avoid introducing unsupported data. Preserve licenses and distinguish generated imagery from real photographs.

Use frontend-design to critique specificity to the brief. In the chosen viewport model, check initial visible content and navigation anchors. Follow the comparison in PROGRESSIVE-BUILD before checkpoint 1. Review the whole first viewport, then a task-critical fragment at native scale. Use Taste to correct the priority gaps and recheck the affected screens before showing work.

Before checkpoint 1, apply STYLE-CHARACTER's visible-character check and CHARACTER-AUDIT's recognizable-language criteria to both screens. Inspect sparse dominant blocks, useful detail/disclosure, reader-facing copy and graphic finish. Correct clear mismatches within the current rounds; do not call a generic recolored kit Fancy because the geometry is valid. Repeated controls must follow file-craft's persistent-layout procedure from construction onward.

**Checkpoint 1:** present three pairs, explain their differences, recommend one and wait for the user's choice. The user responds to images rather than writing a professional design brief.

## 4. Refine the selected direction
Create design/DIRECTION.md: selected style character and its concrete interpretation, visual promise, 3–5 concrete principles, recognizable device across screens, imagery/type rules and constraints that preserve identity. This becomes the visual reference for subsequent work.

Refine both desktop screens and the adaptation sizes defined in the active brief. Draft components/tokens are allowed earlier; defer the full library until the samples are strong. Preserve important information on mobile and avoid mechanically stacking equally weighted desktop cards.

Continue the progressive adaptation/stress-state and motion passes. Maintain docs/ROUNDS.md under DESIGN-TARGET.md: user feedback or concrete observed gap, primary focus, change and repeated check on the same screen/state/viewport. Treat user scores as expectation feedback, not objective completion percentages. Preserve usable before/after evidence and revisit a regression before propagating it.

Apply figcraft-file-craft to the selected samples: organize meaningful entities, replace ambiguous names, reuse recurring controls where appropriate, and check for unnecessary wrappers. Capture before/after screenshots for structural refactoring; verify component links, overrides, bindings and prototype targets. Do not change the selected visual direction or delete hidden layers without checking their purpose.

Apply the seven-part pass in VISUAL-POLISH.md: geometry/optical alignment, purposeful icons, interaction clarity, density/rhythm, typography, consistent finish across media, and identity in details. Taste leads visual changes; Emil supports detail and states; Unslop identifies specific defects without replacing the selected character.

Run the installed Unslop review with CHARACTER-AUDIT.md, not only a search for decorative anti-patterns. Examine generic repetition, unmotivated insets, equal-weight hierarchy and boilerplate copy. Preserve the selected character. Record finding → change → repeated screenshot; justified no-issue observations are allowed.

For 1–2 useful interactions, show states and record trigger, timing/easing and reduced-motion behavior in MOTION. A storyboard does not prove playback. Save current-cycle before/after evidence for substantial fixes. Record defect → change → repeated visual check. Allow up to three correction rounds, then disclose unresolved issues instead of silently accepting them.

Before checkpoint 2, exercise representative stress cases and task paths. Run a fresh-context read-only review subagent per INDEPENDENT-REVIEW.md; normally one reviewer, or two with distinct visual/task-data scopes. The designer alone applies fixes and records reviewer findings/dispositions in docs/REVIEWS.md. Recheck accepted material corrections against updated screenshots/structure. If required review is unavailable or material issues remain after bounded rounds, report the limitation and keep the affected gate incomplete unless explicitly accepted by the user.

**Checkpoint 2:** show the two refined desktop/mobile pairs and material changes. Assess character and execution separately, ask for the user's reaction and wait. If rejected, revisit composition/presentation instead of adding ornaments. Do not expand a weak sample into a full system.

Before presenting, confirm the technical polish did not erase the requested character. Reviewers cover character fit, useful disclosure, proportional space, edited copy and graphic finish as well as alignment/data. A known material mismatch remains a finding under the existing review/gate rules; more completed checks do not cancel it.

## 5. Consolidate the system with UI UX Pro Max
After sample approval, read the skill and run using the script path resolved from LAB_ROOT:

```text
python .agents/skills/ui-ux-pro-max/scripts/search.py "<active product type and analytical or interaction task>" --design-system
```

Check relevance; narrow the query if necessary and search ux/typography/color individually for specific concerns. Do not use --persist. Recommendations verify accessibility, adaptation and coherence; they do not override DIRECTION's palette or fonts. Record accepted and rejected advice in RESEARCH.

Use figcraft-file-craft to consolidate the library without rebuilding compatible components. Define useful properties and only needed variants. Build Foundations: semantic tokens, type scale, grid, spacing, surfaces and adaptation rules. Use actual components/instances, properties, auto layout and bindings where supported. Document actual decisions in DESIGN. Component count is not a measure of beauty. Apply relevant polish checks to source components and representative instances.

## 6. Expand the product
Create the screen families, sizes and representative states defined in the active BRIEF and local FLOW. Carry DIRECTION across every page. Return to Taste and the approved samples if identity weakens.

Build expanded screens from named sections and existing component instances. Apply file-craft while creating them, not as a deferred cleanup task. Show the active product's primary journey, necessary empty/error states and long content. Add prototype links when supported; distinguish structural verification from playback. Verify that components and documentation match screens. Run the seven-part polish pass on new screens before treating them as finished.

Apply the progressive construction passes to new screen families using the approved language. Do not repeat art-direction intake or add duplicate research merely to fill a stage. Finish and inspect a representative screen before propagating its pattern.

During expansion, test the selected long/dense/outlier/empty/missing cases on actual editable screens. Rewalk core tasks after changes. Review source-component fixes on representative instances and sizes. Keep validation evidence separate from baseline presentation.

## 7. Final review and delivery
Follow FINAL-ACCEPTANCE.md. Freeze new content for a dedicated editorial/polish pass: add no new sections or features. Icons may be adjusted where they improve recognition. View each screen at whole-screen scale for composition, then at 100% for detail. Do not judge alignment from a heavily reduced overview. Inspect bounds, dimensions, padding, layout and bindings as supporting evidence; do not substitute those checks for looking.

Run a structural review with figcraft-file-craft before the final image review. Check containment, semantic names, unnecessary wrappers, reuse, bindings, overrides and prototype references. Report unresolved structural items and re-render changed screens. Confirm no visual regression after organization.

Review screens as a family. Repeat CHARACTER-AUDIT with Unslop and check sidebar/footer inset relationships and anchor behavior at the selected viewport heights. Assess character fit and visual authorship independently from geometric validity. Taste checks character and visual coherence, Emil checks detail, Unslop checks defects. Apply VISUAL-POLISH's seven checks, fix findings and re-render affected screens and component instances. Record before/after and unresolved limitations. Save .figcraft and review exports. Complete EVALUATION with separate scores for character, professional execution, usability and system completeness; do not imply user approval from self-scores.

After expansion, run the independent subagent review again on the final revision. Save review coverage, dispositions and focused rechecks. Close accepted blocker/major findings; explain any justified minor deferral visibly. If a required review could not run, mark it unverified rather than silently substituting self-review. Produce docs/ACCEPTANCE.md mapping original deliverables and quality requirements to current evidence. Separate design completion from unperformed human/runtime validation.

## Acceptance
- The idea has an agent-authored observable target; focused construction rounds and relevant feedback have current evidence rather than unsupported completion percentages.
- Standard icons use a documented primary library and verified source assets/package mapping, or an explicit unresolved import limitation; contextual color roles are visually reviewed.
- Style character was explicitly selected or delegated, recorded, and respected independently of theme.
- The user chose a direction on two screens and approved refined desktop/mobile samples.
- A recognizable visual language extends across different pages; Unslop findings address authorship and hierarchy, not just absence of prohibited effects.
- The viewport/layout model is explicit, and relational insets/anchors are visually checked at appropriate sizes.
- Concrete Taste principles are visible and linked to reference analysis.
- All seven polish checks were applied with actual findings/fixes or explicit no-issue observations.
- Required screens/states exist; components/tokens are actually used.
- Meaningful entities are contained and named; the layer tree is navigable, recurring UI is reused appropriately, and structural changes preserve appearance and references.
- Actual viewport/native-scale review covers baseline and representative stress cases; fixtures and their invariants remain consistent.
- Core tasks have explicit static-walkthrough evidence; human observation/playback/runtime status is separately labeled.
- Independent subagent review, finding dispositions and material-fix rechecks are recorded before checkpoint 2 and final delivery, or an explicit user-accepted limitation is documented.
- Final editorial work has no accepted unresolved material defect hidden as future polish; original-scope acceptance is mapped to current evidence.
- Files and images are saved; checks and limitations are reported accurately.

More skills or components do not guarantee quality. Visible decisions and rigorous review matter.
