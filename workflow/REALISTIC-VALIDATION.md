# Realistic validation — viewing, data and content

Apply to any product category. Keep the approved baseline intact. This procedure tests design resilience; it does not authorize application development or imply runtime testing.

## Actual viewing conditions
Record the intended design viewport, first visible region, scroll model and inspection scale. Inspect the primary viewport and at least one smaller relevant viewport, whole-screen and at native 100% detail. A reduced full-page presentation is not evidence of readable working UI. Inspect long content, open menus/sheets, selected rows, bottom anchors and overlays against the actual visible region. View crops at readable scale where necessary. Report whether scrolling/overlay behavior was designed, structurally inspected or actually played; these are different claims.

## Prepare realistic cases before finalizing components
Create an experiment-local data/STRESS-CASES.md manifest and, when useful, data/stress/ fixtures. For products without a dataset, use equivalent realistic content cases. Keep data/seed.json or the approved content baseline unchanged. Each case must identify its source, changed values, expected invariants, affected screens and intended visual/interaction outcome.

Select applicable cases rather than forcing every category into every product:
- Long names, localized text, multiline labels, missing optional fields, short labels and very large counts.
- Empty result vs valid zero vs unavailable/missing value; never encode all three as zero.
- Dense tables/lists: a representative visible page plus overflow, pagination or drill-down behavior. Demonstrate the intended capacity instead of rendering thousands of unnecessary nodes.
- Outliers, abrupt changes, negative deltas and crossing series. Negative values only where meaningful for the metric; counts cannot become negative just to test a chart.
- Chart collisions: coincident points, long legends, narrow categories, small samples, zero denominators and mixed units. Use evidence-preserving alternatives rather than jittering exact measurements without explanation.
- Errors, loading, stale/partial data, permission/availability limits where the task makes them relevant.

For analytical products, generate believable variation instead of perfectly proportional segments or universally smooth trends. Reconcile totals, partitions, flow conservation, units, cohort bases and period definitions. Keep impossible combinations out. When a case changes one quantity, propagate dependent totals and rates within that case, not into the baseline. Mark scenario frames visibly so contradictory values cannot masquerade as one report. Use identical baseline data across candidate art directions.

## Exercise and record
Choose enough cases to challenge the actual design risks. Show each selected case on an editable component/screen, not only in a JSON file. Inspect screenshot and structure at the intended viewport. Check related instances/sizes after a fix. Keep results in docs/VALIDATION.md: case ID, fixture/content reference, frame IDs, expected behavior, observed issue, correction, repeat evidence and unverified limits. A successful arithmetic script does not certify chart geometry or usability. A bounds report does not certify legibility.

The final review must cover the baseline and representative stress states. Report excluded cases with a reason. Do not turn “stress tested” into a blanket claim about arbitrary content, filters or real-world performance.
