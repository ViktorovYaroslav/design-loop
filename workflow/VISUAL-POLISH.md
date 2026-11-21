# Visual polish — mandatory seven-part review

Apply before checkpoint 2, to expanded screens, and before final delivery. This is a reusable visual-quality review, not a request to redesign the selected direction.

## 1. Geometry and optical alignment
Check paired control sizes, centers, common axes, baselines, margins, padding and icon/text alignment. Center labels inside the intended control area, including segmented controls. Use structural measurements, then judge the screenshot: mathematical centering can require a small optical correction. Avoid arbitrary offsets that break layout resilience. Inspect representative source components and instances at native scale.

Follow file-craft's control-layout procedure: repeated controls use actual auto layout with padding/gap/alignment/sizing, or a recorded functional/tool exception. A group/frame and equal child y coordinates do not establish centering. Inspect the layout properties, combined icon/label alignment and text-box behavior; then check visible glyphs optically. Exercise a longer label and alternate size without altering approved baseline copy. Alignment/distribution commands are useful for suitable arrangements, but do not replace persistent layout rules.

Check relational geometry, not just individual boxes: identify the parent boundary, padding zone, shared axes and anchoring rule for each important entity. For a sidebar footer/identity card, compare left/right/bottom insets relative to the sidebar itself, not the artboard. Equal edge insets are a useful starting hypothesis for a bottom-anchored card; use a different value only when content, safe areas, curvature or optical balance justifies it. Do not turn one example into a universal equal-margin rule. The element should look intentionally attached to its container, not float at an unexplained offset.

Inspect these relationships across at least two relevant viewport heights when the shell is screen-filling. Use layout padding/constraints instead of per-screen coordinate nudges where supported. A geometrically in-bounds element can still be poorly placed. Record the intended rule and any justified exception in DESIGN; review its optical result on the screenshot.

## 2. Purposeful icons

Follow ICONOGRAPHY.md: actual official SVG assets from one primary family, Lucide by default, with version/source/license and verified future package-export mapping. Inspect import fidelity and reuse components. Standard icons are not hand-drawn; custom brand/domain graphics are identified separately.
Use icons when they improve recognition: save, share, sign in/out, back and edit are candidates, not mandatory additions. Keep one coherent icon family, stroke weight, visual size and optical alignment. Specify consistent icon/label gaps and hit areas. Keep text for ambiguous actions; do not decorate every button or use emoji as interface icons. Icon-only controls need a documented accessible name and clear meaning. Preserve licenses/credits. This is design intent, not a claim of runtime accessibility testing.

## 3. Interaction clarity
Make buttons, links, inputs, tabs/segments and static labels visually distinguishable. Separate selected, hover, pressed, focus, disabled, loading and success states where relevant. Selection is persistent; focus indicates keyboard location. Clearly communicate the primary action without making every action equally prominent. Match states to the chosen visual language.

Check each detail/disclosure against its trigger: it must add useful inspection, information or action, not just repackage the same content behind an extra click. Choose dialog, panel or inline disclosure by the task and amount of content. Closing is not by itself a meaningful next step. Do not expand scope to justify an unnecessary overlay.

## 4. Density and rhythm
Group related items more closely than unrelated sections. Inspect both crowded regions and unexplained blank areas. Use deliberate spacing tiers rather than equal spacing everywhere. Check balance across columns and around action groups. On mobile, prioritize tasks rather than stacking all desktop content with equal weight.

Explain meaningful asymmetries through the content hierarchy or anchoring model. Avoid unexplained gaps below bottom controls, arbitrary footer offsets and identical padding applied to unrelated roles. Review distribution at the actual viewport height, not only a tall full-page export; see VIEWPORT-STRATEGY.md.

Relate card/dialog footprint to information, task priority and purposeful breathing room. Sparse content in a dominant box needs a visible hierarchy reason. Adjust proportions, grouping or disclosure rather than filling gaps with invented metrics or ornamental content. Do not mechanically compress every panel.

## 5. Typographic finish
Check heading wraps, isolated words, line length, leading, baseline alignment, weight contrast and label truncation. Review time, currency, units and short metadata independently. Align comparable numeric values consistently; use tabular numerals where suitable and supported. Verify Ukrainian glyphs and long strings. Use content-aware text boxes rather than spacing with repeated spaces.

Edit product copy for the actual reader. Keep essential units, period, denominator and uncertainty near the relevant value; avoid repeating the same selection or formula in several places. Secondary definitions belong in a designed help/disclosure when appropriate, and audit methodology belongs in project records. Evaluate the resulting screen, not only its mathematical defensibility.

## 6. Consistent finish across media
Maps, photos, graphics, icons and controls should appear equally finished. Check resolution at intended size, crops, contrast and legibility. Avoid blurry imagery next to sharp UI, duplicated map labels and unexplained schematic placeholders. Distinguish deliberate background restraint from degraded image quality. Verify multiple sizes and show limitations honestly.

For charts inspect the finish of marks, axes/grid contrast, labels/numbers, legends and selected/hover/detail states as one graphic system. A default-looking chart is not improved by more types or effects: refine its hierarchy and meaningful interaction treatment. Verify data encoding again after visual changes. Missing/zero/forecast distinctions and faithful geometry take precedence over a dramatic silhouette.

## 7. Identity in details

Review the chosen color-role/area hypothesis through VISUAL-BALANCE.md. Check perceived attention and semantic consistency rather than declaring a universal 60/30/10 pass. A requested Fancy character can coexist with a mostly neutral field.
Navigation, buttons, highlights, small states and overlays must belong to DIRECTION. Maintain the chosen typographic character, accent logic, shapes and imagery treatment across screens. Reuse components without reverting to an unrelated generic kit. Do not add novelty that obscures the task.

Apply STYLE-CHARACTER's visible-character check and CHARACTER-AUDIT's recognizable-language test before sign-off. Record character mismatch separately from geometry/data defects. Palette, large radii or a clean tree alone do not establish visual authorship; fixes must preserve both the selected character and the task.

## Realistic evidence and independent review
Apply REALISTIC-VALIDATION.md to representative difficult content/data and actual viewports, not only ideal baseline exports. Walk core tasks using TASK-WALKTHROUGH.md. The author performs this pass, then launches read-only independent review subagents under INDEPENDENT-REVIEW.md. A reviewer may find a problem despite a completed checklist. Fix accepted material findings, repeat affected visual/structural/task checks and preserve the selected direction. FINAL-ACCEPTANCE.md governs final editorial scope and honest completion.

## Review procedure and evidence
1. Stop adding sections/features for the final pass.
2. View each screen as a whole, then at 100% detail; use crops/exports when required.
3. Inspect geometry/layout and relevant component instances.
4. Record finding → change → repeat screenshot review, with frame/file references.
5. Recheck affected states and sizes after source-component changes.
6. Mark each category checked; if no issue was found, say what was inspected. List blocked/unverified items. Never invent fixes to populate a checklist.

Keep findings in a current-cycle audit and summarize coverage in EVALUATION. A bounds report or completed checklist is supporting evidence, not proof of visual quality.
