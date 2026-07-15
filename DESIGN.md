---
version: 0.3.0
name: Kern
description: Monochrome, text-first minimalist design system. Ink-on-paper, icon+text driven, no accent color, bundled IBM Plex fonts (SIL OFL 1.1).
colors:
  # --- Primitive gray ramp (theme-agnostic raw values) ---
  gray-0: "#FFFFFF"
  gray-50: "#FAFAFA"
  gray-100: "#F2F2F2"
  gray-200: "#E4E4E4"
  gray-300: "#CFCFCF"
  gray-400: "#A3A3A3"
  gray-500: "#8A8A8A"
  gray-600: "#525252"
  gray-700: "#3D3D3D"
  gray-800: "#1C1C1C"
  gray-850: "#171717"
  gray-950: "#0A0A0A"
  # --- Semantic (light default; dark re-binds only these) ---
  bg: "{colors.gray-0}"
  surface: "{colors.gray-50}"
  surface-2: "{colors.gray-100}"
  border: "{colors.gray-200}"
  border-strong: "{colors.gray-300}"
  ink: "{colors.gray-950}"
  text: "{colors.gray-850}"
  text-secondary: "{colors.gray-600}"
  text-muted: "{colors.gray-500}"
  inverse-bg: "{colors.gray-950}"
  inverse-text: "{colors.gray-0}"
typography:
  h1:
    fontFamily: "IBM Plex Sans"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "IBM Plex Sans"
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  label:
    fontFamily: "IBM Plex Mono"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 999px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.inverse-text}"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 12px
  card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 12px
  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.pill}"
    padding: 4px
  nav-item-active:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 10px
---

## Overview

Kern is a monochrome, text-first design system. It deliberately uses **no accent
color** — emphasis is created through typographic hierarchy, whitespace, and a
single ink tone against paper-white (or its dark-mode inverse). The goal is a calm,
editorial interface that reads like a well-set document rather than a dashboard.

Images are avoided by design. Where a modern UI might reach for illustration or
photography, Kern uses small 1px-stroke inline SVG icons (bundled in
`assets/icons.js`) paired with text. The result is lightweight, themeable, and
fully offline.

## Colors

Kern's palette is a single ink ramp plus neutral surfaces. There is **no hue**:

- **Ink (#0A0A0A):** The only "strong" tone. Used for headlines, primary
  buttons, borders that matter, and active states.
- **Text (#171717) / Secondary (#525252) / Muted (#8A8A8A):** The reading ramp.
- **Surface (#FAFAFA / #F2F2F2) and Border (#E4E4E4 / #CFCFCF):** Quiet
  structure. Borders do the separating work that color usually does.
- **Inverse (#0A0A0A bg / #FAFAFA text):** For solid buttons and badges.

Dark mode mirrors the ramp exactly — paper becomes ink, ink becomes paper.

## Typography

Three families from a **single steward (IBM)**, all SIL OFL 1.1:

- **IBM Plex Sans** — display & headings (500/700) and UI & body (400/500/600).
  Hierarchy is weight, not a second family. Clean, corporate, highly legible.
- **IBM Plex Mono** — labels, meta, status (400/500). Uppercase, tracked-out
  labels signal "system" / "metadata" without color.

Both are **bundled locally** in `assets/fonts/` (woff2, latin + latin-ext
so Turkish and other Latin-extended characters render). Full license text
ships as `assets/fonts/OFL-IBM-Plex.txt`; see `FONTS.md`. No CDN dependency.
Reserved Font Name: **"Plex"**.

## Layout

Single centered column, max-width 1080px, generous vertical rhythm
(48–80px between major blocks). Components align to a 4px spacing scale. Density
is low by default — whitespace is a feature, not wasted space.

## Elevation & Depth

Kern avoids shadows almost entirely. Separation comes from 1px borders and
surface fills. The only shadows (`--shadow-sm/md`) are subtle and reserved for
hover/focus affordance. There is no layering color.

## Shapes

Restrained radii: 4px for compact controls, 8px for buttons/inputs, 12px for
Dark mode mirrors the ramp exactly — paper becomes ink, ink becomes paper.
The **primitive gray ramp stays constant**; only the semantic layer is re-bound.

## Accessibility

Kern is monochrome, so contrast is earned with the gray ramp, not hue.

- **Contrast (WCAG 2.1, measured sRGB):** body/secondary text ≥ 4.5:1
  (AA); large display text ≥ 3:1; UI borders & focus rings ≥ 3:1 (AA
  non-text). Verified: `--text` on `--bg` = **17.4:1** (light),
  `--text-secondary` = **4.85:1**, `--border-strong` hover/focus = **3.14:1**.
- **Focus ring (monochrome):** `:focus-visible { outline: 2px solid
  var(--ink); outline-offset: 2px }` — no accent color needed; `--ink`
  is always the highest-contrast tone.
- **Icons:** decorative icons are `aria-hidden="true"` (auto-set by
  `icons.js`); an **icon-only button** gets `aria-label` on the button.
- **Reduced motion:** a global `@media (prefers-reduced-motion: reduce)`
  block disables transforms/parallax but keeps the focus ring and opacity
  transitions. View Transitions API is **not** used (decorative overhead).

## Components

All components live as standalone, runnable files in `components/` (one per file),
sharing `assets/tokens.css`, `assets/components.css`, `assets/fonts.css`, and
`assets/icons.js`. Each is openable directly in a browser. Build with the
**semantic** tokens (`--bg`, `--text`, `--ink`, `--border`…); never reference a
`--gray-*` primitive directly in a component.

- **button** — primary (ink), secondary (outline), ghost; sm/md/lg; inline icon
  or icon-only. `components/button.html`
- **card** — icon mark + title + body + text action. `components/card.html`
- **input** — label-led field with optional leading icon, helper, and error
  state. `components/input.html`
- **badge** — outlined status markers; solid only for the one item that must
  stand out. `components/badge.html`
- **nav** — icon + text segmented navigation; active state by surface, not color.
  `components/nav.html`
- **modal** — dialog with focus trap, Escape to close, focus restore to
  trigger. `role="dialog"` + `aria-modal`. `components/modal.html`
- **toggle** — on/off switch via `role="switch"` + synced `aria-checked`;
  state expressed by thumb motion, not color. `components/toggle.html`
- **table** — sortable data; `aria-sort` columns with a visible glyph.
  Text, not color. `components/table.html`
- **checkbox** — multi-select; ink fill + check. Native input. `components/checkbox.html`
- **radio** — single choice; ink ring. Native radio group. `components/radio.html`
- **select** — native `<select>` + monochrome chevron. `components/select.html`
- **textarea** — multi-line field; same focus language as input. `components/textarea.html`
- **tabs** — in-page panels; ink underline active state; arrow-key nav.
  `components/tabs.html`
- **alert** — feedback without hue (default / strong rail / solid invert).
  `components/alert.html`

Icons: mount with `<span class="k-icon" data-icon="name"></span>` or call
`kern.icon('name')`. Available names are returned by `kern.icons()`.

## Do's and Don'ts

**Do**
- Lead with type and spacing; reach for a border before a fill.
- Use icons only when they aid scanning — never decoratively.
- Keep the palette monochrome; express state through weight and border, not hue.
- Bundle/extend fonts in `assets/fonts/`; do not add CDN `<link>` tags.

**Don't**
- Introduce an accent color, gradient, or tinted surface.
- Add photographs, hero illustrations, or decorative imagery.
- Simulate depth with heavy shadows or glows.
- Create a new component that breaks the shared token set — extend tokens, don't
  hardcode values.
