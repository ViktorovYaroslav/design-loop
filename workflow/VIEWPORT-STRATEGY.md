# Viewport, canvas and scrolling strategy

The agent chooses the working format from product use, not from a universal artboard preset. Explain the choice briefly in the active DESIGN/DIRECTION record; do not ask the user to decide every size. An explicit device/viewport requirement takes precedence.

## Choose the layout model before direction samples

- **Screen-filling workspaces:** dashboards, analytics, editors and monitoring tools should normally use a viewport-based shell. Consider 1920×1080 (Full HD, 16:9) as the primary desktop sample when users are expected to work on full-screen desktop displays. Treat this as a CSS/design viewport only when explicitly assumed; physical monitor resolution can differ because of browser chrome, zoom and OS scaling. Verify a smaller working viewport, commonly 1440×900, rather than designing only for an ideal large monitor.
- **Content-led websites:** landing pages, shops, articles and portfolios usually need a responsive content container and vertical document flow. Choose realistic viewport widths and show the first viewport separately from a full-page overview. Full-bleed sections may coexist with bounded text columns.
- **Other applications:** choose device sizes and layout behavior from the task. A full-screen shell can contain max-width reading panels; a website can contain a screen-filling tool. Do not infer every layout decision from the label “dashboard” or “website”.

Do not silently replace approved sizes in an existing experiment. Apply this decision when starting a new design or an authorized adaptation; record why a different size is more appropriate. Experiment-specific requirements override shared examples.

## Distinguish viewport from full content

A 1920×1080 viewport frame represents what is visible at once. A 1920×1800 composition is a full-content page, not a Full HD screen. Show the viewport/fold and scrolling specification separately. Mark full-page exports as such. Do not compress every chart or shrink text merely to eliminate scrolling.

Define explicitly:

- shell behavior: full width, bounded or hybrid;
- fixed/sticky areas: navigation, top bar, bottom identity/actions;
- which region scrolls: main content, table or document;
- how charts/tables use added width and height;
- what is visible initially, what continues below the fold, and what opens in detail;
- smaller-viewport reflow, minimum usable widths and any deliberate horizontal table scrolling.

Prefer a simple scroll model; nested scroll areas need a task-based reason. Bottom-anchored navigation content follows its container, not the height of exported page content. Avoid stretching charts and leaving empty panels solely to fill the canvas. Preserve chart encodings when resizing; a viewport change is not permission to change the data.

## Review

Inspect the intended viewport as a whole and at native scale. Confirm that important controls remain reachable, hierarchy survives the fold, bottom anchors are intentional, and overlays have a documented viewport/scroll relationship. Review full content separately when scrolling is needed. In FigCraft, use constraints/layout/prototype overflow only where supported; static placement is not proof of runtime responsiveness or sticky behavior.
