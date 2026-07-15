# Akana — Agent Guide

A monochrome, text-first design system. Ink-on-paper, icon+text driven, **no
accent color**, **no decorative images**. Fonts are bundled locally (offline).

## How to add a component (the core rule)

> Write a few simple HTML and JavaScript components **one by one**, each in its
> **own file** under `components/`. Keep each file self-contained and runnable.

Concretely:

1. Create `components/<name>.html`.
2. At the top of `<head>`, link the shared assets (relative paths):
   ```html
   <link rel="stylesheet" href="../assets/fonts.css">
   <link rel="stylesheet" href="../assets/tokens.css">
   <link rel="stylesheet" href="../assets/components.css">
   ```
   and before `</body>`:
   ```html
   <script src="../assets/icons.js"></script>
   ```
3. Use `class="akana"` on `<body>` so component styles apply.
4. Build with the tokens in `assets/tokens.css` — **never hardcode colors,
   spacing, or font sizes.** Use the `--gray-*` primitive ramp and the
   `--bg/--surface/--text/--border/--ink` semantic tokens. Type uses
   the fluid `--fs-*` `clamp()` scale; spacing uses `--space-*`.
5. Add an inline icon with `<span class="ak-icon" data-icon="search"></span>`.
   Icons are 1.6px-stroke `currentColor` SVG; decorative ones are
   auto-hidden from screen readers — for an icon-only button, set
   `aria-label` on the button and leave the icon to inherit it.
6. Keep it minimal: one component concept per file, real states
   (hover/focus/disabled/active), and `prefers-reduced-motion` respected
   (handled globally in tokens.css).
7. Include the demo chrome: FOUC theme script in `<head>`, a top
   `ak-demo-bar` with Gallery + `#theme-btn`, and load
   `../assets/theme.js` after `icons.js` so light/dark matches the gallery.

## Folder layout

```
Akana/
  |  DESIGN.md          # formal token spec (machine-readable) — edit tokens here
  |  AGENTS.md          # this file
  |  README.md          # project overview
  |  CHANGELOG.md       # SemVer history (git tags mirror this)
  |  CONTRIBUTING.md    # how to add components / extend tokens
  |  TOKENS.md          # token reference (values + contrast table)
  |  index.html         # gallery / showcase (theme toggle, FOUC-free)
  |  about.html         # the system's parts
  |  assets/
  |    fonts/           # bundled .woff2 (offline, latin + latin-ext)
  |    fonts.css        # @font-face declarations
  |    tokens.css       # 3-layer tokens: primitive / semantic / component
  |    components.css   # shared component styles
  |    icons.js         # inline SVG icon set + akana.icon()/akana.mount()
  |  components/         # ONE simple component per file, standalone + runnable
  |    button.html
  |    card.html
  |    input.html
  |    badge.html
  |    nav.html
  |    modal.html
  |    toggle.html
  |    table.html
  |    checkbox.html
  |    radio.html
  |    select.html
  |    textarea.html
  |    tabs.html
  |    alert.html
  |    accordion.html
  |    breadcrumb.html
  |    pagination.html
  |    empty-state.html
  |  scripts/
  |    download_fonts.py  # re-bundle fonts if needed
  |    check_icons.js     # verify every used icon exists
  ```

  ## Design constraints (non-negotiable)

  - **Monochrome only.** No accent color, no gradient, no tinted surface.
    State = weight + border, not hue.
  - **Text-first.** Hierarchy from type and spacing. Icons assist, never decorate.
  - **No images.** Zero `<img>` for decoration; icons are inline SVG only.
  - **Offline fonts.** Do not add Google Fonts `<link>` tags. Add/replace woff2 in
    `assets/fonts/` and regenerate `assets/fonts.css` via `scripts/download_fonts.py`.
  - **Tokens are single-source, 3-layer.** `tokens.css` is the only source:
    - **Primitive** (`--gray-0…950`, font families, raw scale) — meaning-less,
      theme-agnostic. Never reference a primitive directly in a component.
    - **Semantic** (`--bg`, `--surface`, `--text`, `--ink`, `--border`…) — intent.
      Components reference THESE. Dark mode re-binds only this layer.
    - **Component** (`--button-bg` etc.) — added per-component only as needed.
  - **Fluid type.** Use the `--fs-*` `clamp()` scale; do not hardcode font-size.
  - **Accessibility built-in.** Focus ring is `2px solid var(--ink)` (no accent).
    Decorative icons are `aria-hidden`; icon-only buttons need `aria-label`.
    `prefers-reduced-motion` is honored globally.

  ## Theming

  Light is default. Dark follows `prefers-color-scheme` and can be forced with
  `<html data-theme="dark">` or `data-theme="light"`. `index.html`/`about.html`
  include a FOUC-free inline `<head>` script that reapplies a saved theme from
  `localStorage` before first paint.

  ## Verifying a component

  Open the file directly in a browser (no server needed — all assets are relative).
  Check: renders in both light and dark, focus-visible outlines present, no console
  errors, icons mounted, and `prefers-reduced-motion` disables transforms.
