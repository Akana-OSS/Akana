# Changelog

All notable changes to Kern are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and this project adheres to
[Semantic Versioning](https://semver.org/) — mirrored by git tags (`vX.Y.Z`).

## [Unreleased]

## [0.3.0] - 2026-07-15

### Added
- **IBM Plex** font stack (SIL OFL 1.1, single steward): Plex Sans 400–700
  (display + UI), Plex Mono 400–500 (labels). Latin + latin-ext woff2.
- `assets/fonts/OFL-IBM-Plex.txt` + `FONTS.md` (attribution and redistributability).
- **Form + feedback components** (standalone HTML):
  - `checkbox.html`, `radio.html`, `select.html`, `textarea.html`
  - `tabs.html` (ARIA tabs, keyboard Left/Right/Home/End)
  - `alert.html` (default / strong / solid — monochrome feedback)
- Research report: `docs/DESIGN_SYSTEMS_RESEARCH.md`.

### Changed
- Replaced Space Grotesk + Inter + JetBrains Mono with IBM Plex (clearer
  single-steward licensing and documentation).
- `tokens.css`, `DESIGN.md`, gallery type specimen, README, about, AGENTS.

## [0.2.0] - 2026-07-15

### Added
- **3-layer token model** (`tokens.css`): primitive gray ramp → semantic →
  component. Dark mode now re-binds only the semantic layer.
- **Fluid type scale** via `clamp()` (viewport 320→1280px).
- **FOUC-free theming** and monochrome focus / reduced-motion guards.
- Components: modal, toggle, table.
- Docs: `TOKENS.md`, `CHANGELOG.md`, `CONTRIBUTING.md`.

## [0.1.0] - 2026-07-15

### Added
- Initial Kern design system: monochrome, text-first, bundled offline fonts.
- Five standalone components: button, card, input, badge, nav.
- `DESIGN.md`, `AGENTS.md`, `index.html`, `about.html`, shared assets.
