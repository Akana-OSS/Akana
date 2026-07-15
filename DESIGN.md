---
version: alpha
name: Kern
description: Monochrome, text-first minimalist design system. Ink-on-paper, icon+text driven, no accent color, bundled local fonts.
colors:
  bg: "#FFFFFF"
  surface: "#FAFAFA"
  surface-2: "#F2F2F2"
  border: "#E4E4E4"
  border-strong: "#CFCFCF"
  ink: "#0A0A0A"
  text: "#171717"
  text-secondary: "#525252"
  text-muted: "#8A8A8A"
  inverse-bg: "#0A0A0A"
  inverse-text: "#FAFAFA"
typography:
  h1:
    fontFamily: "Space Grotesk"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Space Grotesk"
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: "Inter"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  label:
    fontFamily: "JetBrains Mono"
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

Three families, each with a clear job:

- **Space Grotesk** — display & headings (500/700). Geometric, slightly tight.
  Carries the brand's personality.
- **Inter** — UI & body (400/500/600). Neutral, highly legible at small sizes.
- **JetBrains Mono** — labels, meta, status (400/500). Uppercase, tracked-out
  labels signal "system" / "metadata" without color.

All three are **bundled locally** in `assets/fonts/` (woff2, latin + latin-ext
so Turkish and other Latin-extended characters render). No CDN dependency.

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
cards, 999px for pills/badges. Consistency over variety.

## Components

All components live as standalone, runnable files in `components/` (one per file),
sharing `assets/tokens.css`, `assets/components.css`, `assets/fonts.css`, and
`assets/icons.js`. Each is openable directly in a browser.

- **button** — primary (ink), secondary (outline), ghost; sm/md/lg; inline icon
  or icon-only. `components/button.html`
- **card** — icon mark + title + body + text action. `components/card.html`
- **input** — label-led field with optional leading icon, helper, and error
  state. `components/input.html`
- **badge** — outlined status markers; solid only for the one item that must
  stand out. `components/badge.html`
- **nav** — icon + text segmented navigation; active state by surface, not color.
  `components/nav.html`

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
