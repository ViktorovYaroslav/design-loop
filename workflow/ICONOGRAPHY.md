# Iconography — reusable assets with implementation parity

Choose one primary UI icon family before finishing samples. Default to Lucide unless the existing product system or chosen visual direction gives a concrete reason to select another. The designer makes this routine choice. Record it in docs/DESIGN.md; do not ask the user to pick individual icons.

| Family | Suitable reason to choose | Future React package |
|---|---|---|
| [Lucide](https://lucide.dev/guide/react) | Default consistent outline UI set | lucide-react |
| [Phosphor](https://github.com/phosphor-icons/react) | A direction that benefits from its selectable weights, fill or duotone treatment | @phosphor-icons/react |
| [Heroicons](https://heroicons.com/) | A product already using this family or its outline/solid treatment | @heroicons/react |

This is an asset decision, not an instruction to install frontend packages in this design-only project. Verify the selected release, official SVG asset and exact future export name from that release; do not guess naming conventions across versions.

## Import and reuse

1. Obtain the actual SVG from an official package/repository at a recorded release or commit. Keep only used source assets in assets/icons/ with their source/license notices. Avoid unpinned latest URLs as the only provenance.
2. Discover FigCraft's supported SVG/vector import route. Import the original geometry, preserve editability where supported, and inspect the result at its intended size. If import fails, try another supported asset route or report the limitation; do not silently hand-trace or approximate a standard icon.
3. Create reusable icon components/instances where supported, named by family and source slug, for example Icon/Lucide/arrow-up-right. Keep icon and label inside the control frame. Do not mix unrelated families to fill routine gaps.
4. Set size, stroke/weight, color, icon/label gap and optical positioning consistently. Keep the family geometry; avoid arbitrary nonuniform scaling. Test at actual rendering size, not only large vector zoom.
5. In assets/icons/MANIFEST.md record library, release/commit, official source, license notice, source slug, verified package export, imported component/node ID and any supported styling overrides. Record variants only when actually used.

Use a text label for ambiguous actions and a documented accessible name for icon-only controls. Icons support recognition and hierarchy; they are not a decoration quota. Distinctive brand marks, domain diagrams, chart marks and original illustrations may be custom and must be identified separately. Brand logos come from an appropriate official/licensed source rather than an improvised UI glyph. Chart legends and status encodings need not be icon-library components.

Current source references, checked 2026-11-15: [Lucide React](https://lucide.dev/guide/react), [Lucide license including Feather-derived notices](https://lucide.dev/license), [Phosphor React](https://github.com/phosphor-icons/react), [Heroicons](https://github.com/tailwindlabs/heroicons). Preserve the actual selected asset's notices. No library assets or frontend dependencies were installed by this policy update; existing designs are preserved.
