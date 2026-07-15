# Kern — Agent Guide

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
3. Use `class="kern"` on `<body>` so component styles apply.
4. Build with the tokens in `assets/tokens.css` — **never hardcode colors,
   spacing, or font sizes.** Use the `--ink`, `--text`, `--surface`,
   `--border`, `--space-*`, `--fs-*` variables.
5. Add an inline icon with `<span class="k-icon" data-icon="search"></span>`
   (see `assets/icons.js` for names). Icons are 1px-stroke, `currentColor`.
6. Keep it minimal: one component concept per file, real states
   (hover/focus/disabled/active), and `prefers-reduced-motion` respected
   (handled globally).

## Folder layout

```
Kern/
  DESIGN.md          # formal token spec (machine-readable) — edit tokens here
  AGENTS.md          # this file
  index.html         # gallery / showcase (theme toggle)
  assets/
    fonts/           # bundled .woff2 (offline, latin + latin-ext)
    fonts.css        # @font-face declarations
    tokens.css       # colors, type scale, spacing, radii, motion
    components.css   # shared component styles
    icons.js         # inline SVG icon set + kern.icon()/kern.mount()
  components/         # ONE simple component per file, standalone + runnable
    button.html
    card.html
    input.html
    badge.html
    nav.html
  scripts/
    download_fonts.py  # re-bundle fonts if needed
```

## Design constraints (non-negotiable)

- **Monochrome only.** No accent color, no gradient, no tinted surface.
  State = weight + border, not hue.
- **Text-first.** Hierarchy from type and spacing. Icons assist, never decorate.
- **No images.** Zero `<img>` for decoration; icons are inline SVG only.
- **Offline fonts.** Do not add Google Fonts `<link>` tags. Add/replace woff2 in
  `assets/fonts/` and regenerate `assets/fonts.css` via `scripts/download_fonts.py`.
- **Tokens are single-source.** Extend `tokens.css` / `DESIGN.md` rather than
  baking values into a component.

## Theming

Light is default. Dark follows `prefers-color-scheme` and can be forced with
`<html data-theme="dark">` or `data-theme="light"`. The gallery's toggle
demonstrates the pattern.

## Verifying a component

Open the file directly in a browser (no server needed — all assets are relative).
Check: renders in both light and dark, focus-visible outlines present, no console
errors, icons mounted.
