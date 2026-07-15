# Changelog

All notable changes to Kern are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and this project adheres to
[Semantic Versioning](https://semver.org/) — mirrored by git tags (`vX.Y.Z`).

## [Unreleased]

### Added
- **3-layer token model** (`tokens.css`): primitive gray ramp → semantic →
  component. Dark mode now re-binds only the semantic layer.
- **Fluid type scale** via `clamp()` (viewport 320→1280px), replacing
  fixed rem sizes.
- **FOUC-free theming**: inline `<head>` script in `index.html` /
  `about.html` re-applies a saved theme from `localStorage` before first paint;
  gallery toggle now persists the choice.
- **Built-in accessibility** in `tokens.css`: monochrome `:focus-visible`
  ring (`2px solid var(--ink)` + offset) and a global `prefers-reduced-motion`
  block that keeps focus/opacity but drops transforms.
- **Icon a11y** in `icons.js`: decorative icons auto-`aria-hidden`;
  icon-only buttons (with `aria-label`) stay exposed.
- **P0 components** (one file each, standalone + runnable):
  - `components/modal.html` — `role="dialog"` + `aria-modal`, focus trap,
    Escape to close, focus restore.
  - `components/toggle.html` — `role="switch"` + synced `aria-checked`.
  - `components/table.html` — `aria-sort` sortable columns, keyboard sort.
- Documentation: `TOKENS.md` (reference + contrast table), `CHANGELOG.md`,
  `CONTRIBUTING.md`.

### Changed
- `AGENTS.md` and `DESIGN.md` updated to the 3-layer token model and the
  new accessibility / theming rules.
- Space Grotesk (display) + Inter (UI) + JetBrains Mono (labels) retained
  as bundled woff2; variable-font + latin-subset recommended for future refresh.

## [0.1.0] - 2026-07-15

### Added
- Initial Kern design system: monochrome, text-first, bundled offline fonts.
- Five standalone components: button, card, input, badge, nav.
- `DESIGN.md` (Google DESIGN.md spec), `AGENTS.md`, `index.html` gallery,
  `about.html`, shared `assets/` (fonts, tokens, components.css, icons.js).
