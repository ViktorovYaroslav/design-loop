# Style character — user-selected visual expressiveness

## What this controls
Character describes how restrained or expressive the visual treatment should be. It does not choose a specific style, font, theme, layout, density or level of professionalism. A modern interface can be restrained or expressive; a light theme can be expressive and a dark theme can be restrained.

This is a conversation preference, not a slider/control to add to the designed product. The three named positions are sufficient; do not invent a numerical precision scale. The agent still owns art direction, references and execution.

## Applies to every product category
This preference applies to all design tasks: landing pages, portfolios, shops, booking services, dashboards, desktop tools and mobile applications. The user's dashboard screenshots illustrate the meaning of expressiveness; they do not limit the feature to analytics or prescribe dashboard-like composition elsewhere.

Translate character through the active product's materials and tasks. A landing page may express it through typography, imagery and section transitions; a shop through product presentation and merchandising; an application through navigation, controls, feedback and surfaces; a dashboard through chart craft and analytical hierarchy. These are examples, not required treatments. Choose suitable references for the product rather than copying dashboard panels, charts or glass effects into unrelated work.

## Ask before visual research for a new iteration
If the user already explicitly selected a character for this iteration, record it and proceed without asking again. Otherwise present one concise three-choice selector in the user's conversation language, preferably using an available question tool. Use these Russian labels when speaking Russian:

1. Строгий — restrained, precise, calm surfaces and accents; clarity-first visual treatment.
2. Выразительный / Fancy — contemporary, visibly art-directed; richer color/surfaces, confident typography and distinctive chart/component treatment where appropriate.
3. Сбалансированный — a calm working foundation with selected expressive focal areas.

Suggested question: “Какой характер нужен этой итерации: строгий, выразительный / Fancy или сбалансированный? Тему, шрифты и конкретные приёмы я предложу сам.”

Do not require the user to know fonts or effects. Do not silently preselect a style, infer a choice from a collection of references, or treat elapsed time as a response. If the user explicitly delegates the choice, choose, explain the assumption and record that delegation. While waiting, inspect data/scope and existing files, but do not finalize visual hypotheses or mutate the visual design based on an unchosen character.

## Interpret the three positions
| Aspect | Restrained | Expressive / Fancy | Balanced |
|---|---|---|---|
| Surfaces | Quiet planes and restrained separation | Deliberate layering, depth, tonal variation or selective translucent/gradient treatments when they help | Quiet base with one or a few richer areas |
| Color | Limited functional emphasis | Stronger chromatic identity and deliberate contrast hierarchy | Focused brand accents within calm work areas |
| Typography | Precise, even rhythm | More distinctive hierarchy, type character and scale relationships | Clear working type with memorable focal treatment |
| Graphics | Direct analytical representation | Richer series/mark/tooltip treatment without distorting meaning | Expressive emphasis on selected analytical moments |
| Detail | Understated, consistent | More authored controls, icons, highlights and state transitions | Selectively expressive details, coherent elsewhere |

These are decision criteria, not mandatory effects. Expressive does not mean every element glows, every panel is glass, every line is smoothed, or a photograph fills the background. Balanced is an intentional hierarchy, not random mixing. Restrained must still be finished and recognizable, not a wireframe.

## Translate references into a direction
Analyze supplied examples along independent dimensions: light/dark, flat/layered surfaces, color intensity, typography, graph craft, density and composition. Separate actual UI from presentation framing: tilted browser mockups, ambient backgrounds and external glows are not automatically product features. Do not copy assets, branding or unsupported business metrics.

Reference collections can span conventional dashboards, photographic treatments, saturated panels or quiet layered surfaces. Identify their relevant shared principles without assuming one required palette/theme or importing weak legibility and decorative chart encodings. Do not claim an image was viewed unless the current context actually includes it.

Taste remains primary: choose and examine references that actually match the selected character. Record reference → visual principle → visible decision. Generate all three candidate directions within the selected character, varying art direction rather than using the three slots for restrained/expressive/balanced. Show a calibration sample only if ambiguity materially blocks progress; do not add another mandatory approval gate.

## Evidence of the requested character

Before presenting candidate pairs and refined samples, identify the concrete decisions that carry the selected character and compare them with actually viewed references. For Fancy, look beyond palette, gradient fill and corner radius: composition, type relationships, key graphic treatment or meaningful detail states should show intentional visual authorship. Not every dimension needs to be expressive; judge the combined effect rather than enforcing an effect count. A neutral analytical field can support a strong expressive focal area.

Test whether the direction remains recognizable across both sample screens and their smaller adaptation. If only recoloring and rounding distinguish it from a generic kit, refine the language before presenting it as Fancy. Do not silently relabel an under-expressive result Balanced or treat geometric correctness as character fit. For Restrained/Balanced, use the same comparison to avoid mistaking an unfinished/default layout for intentional restraint.

Preserve character during later cleanup: compare before/after for task clarity, craft and visual identity separately. A polish change that removes the selected character is a regression even if it simplifies the tree. No arbitrary novelty, mandatory photograph, display font or extra animation is required.

## Non-negotiable quality across all positions
Keep the same requirements for legibility, contrast, geometry, responsive hierarchy, semantic layers, data accuracy, chart scales, units and denominators. Never modify the seed values or interpolate unsupported peaks just to create a more attractive chart. Gradients, blur and depth must preserve data contrast and foreground/background separation. Motion is purposeful and optional; static design cannot prove runtime behavior. Do not use Unslop or another skill to erase requested gradients, depth or bold color merely because they appear on an anti-pattern list: judge fit and execution.

## Record and review
Store the explicit choice, its origin (user-selected or delegated), iteration scope and reference paths in EXPERIMENT_ROOT/docs/STYLE-PREFERENCE.md. Include concrete interpretation and limits in design/DIRECTION.md after a direction is chosen. Use STYLE-PREFERENCE before interpreting inherited visual decisions; a previous experiment's character does not carry over automatically.

Review two independent questions: does the design match the requested character, and is execution professional/usable? More effects are not evidence of better quality. Record mismatch and actual refinements in EVALUATION.

For a new iteration on an existing product, preserve the baseline and evidence, record the new choice, and agree the target file/variant before edits. Adding this preference feature alone never authorizes overwriting an approved design or restarting a cycle.
