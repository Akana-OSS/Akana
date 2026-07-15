# Kern — Token Reference

Monochrome by design. **No accent color.** The only colors are a neutral
gray ramp. State is expressed through weight and border, never hue.

## Layer model (3-layer)

Kern's tokens follow a primitive → semantic → component structure.
Never reference a **primitive** directly in a component — use the **semantic** token.

| Layer | Tokens | Role |
|---|---|---|
| Primitive | `--gray-0 … --gray-950`, font families, `--fs-*` raw scale | Meaning-less, theme-agnostic raw values |
| Semantic | `--bg`, `--surface`, `--text`, `--ink`, `--border`, `--border-strong`, `--inverse-*` | Intent — what a value *means* |
| Component | `--button-bg`, `--card-border` (added as needed) | Per-component overrides |

Dark mode re-binds **only** the semantic layer; the gray ramp stays constant.

## Gray ramp (primitive)

| Token | Light value | Dark value |
|---|---|---|
| `--gray-0` | `#ffffff` | `#0a0a0a` |
| `--gray-50` | `#fafafa` | `#141414` |
| `--gray-100` | `#f2f2f2` | `#1c1c1c` |
| `--gray-200` | `#e4e4e4` | `#2a2a2a` |
| `--gray-300` | `#cfcfcf` | `#3d3d3d` |
| `--gray-400` | `#a3a3a3` | `#6b6b6b` |
| `--gray-500` | `#8a8a8a` | `#8a8a8a` |
| `--gray-600` | `#525252` | `#a3a3a3` |
| `--gray-700` | `#3d3d3d` | `#3d3d3d` |
| `--gray-850` | `#171717` | `#ededed` |
| `--gray-950` | `#0a0a0a` | `#fafafa` |

## Semantic tokens

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--bg` | `--gray-0` | `--gray-950` | Page background |
| `--surface` | `--gray-50` | `#141414` | Card / inset surface |
| `--surface-2` | `--gray-100` | `--gray-800` | Hover surface |
| `--border` | `--gray-200` | `--gray-700` | Default border |
| `--border-strong` | `--gray-300` | `--gray-700` | Emphasized border / hover |
| `--ink` | `--gray-950` | `--gray-0` | Headlines, primary buttons, active states |
| `--text` | `--gray-850` | `#ededed` | Body text |
| `--text-secondary` | `--gray-600` | `--gray-400` | Muted body / labels |
| `--text-muted` | `--gray-500` | `#6b6b6b` | Placeholder / meta |
| `--inverse-bg` | `--gray-950` | `--gray-0` | Solid button / badge bg |
| `--inverse-text` | `--gray-0` | `--gray-950` | Text on inverse bg |

## Contrast (WCAG 2.1, measured sRGB)

| Pair | Ratio | Level |
|---|---|---|
| `--text` on `--bg` (light) | **17.4:1** | AAA |
| `--text-secondary` on `--bg` (light) | **4.85:1** | AA |
| `--ink` on `--bg` (dark) | **>15:1** | AAA |
| `--text` on `--bg` (dark) | **>10:1** | AAA |
| `--border-strong` hover/focus | **3.14:1** | AA (non-text / UI) |
| `--text-secondary` on `--bg` (dark) | **>4.5:1** | AA |

**Rules:** body/secondary text ≥ 4.5:1; UI borders & focus rings ≥ 3:1;
never place text on pure `--ink`/`--gray-950` without the inverse token.

## Type scale (fluid `clamp()`)

`clamp(MIN, PREFERRED, MAX)` — MIN at 320px, MAX at 1280px viewport.

| Token | Formula | Desktop target |
|---|---|---|
| `--fs-2xs` | `clamp(10px, 0.104vw + 9.667px, 11px)` | 11px |
| `--fs-xs` | `clamp(11px, 0.104vw + 10.667px, 12px)` | 12px |
| `--fs-sm` | `clamp(13px, 0.104vw + 12.667px, 14px)` | 14px |
| `--fs-md` | `clamp(14px, 0.208vw + 13.333px, 16px)` | 16px (body) |
| `--fs-lg` | `clamp(16px, 0.208vw + 15.333px, 18px)` | 18px |
| `--fs-xl` | `clamp(18px, 0.417vw + 16.667px, 22px)` | 22px |
| `--fs-2xl` | `clamp(22px, 0.625vw + 20px, 28px)` | 28px (h2) |
| `--fs-3xl` | `clamp(26px, 1.042vw + 22.667px, 36px)` | 36px (h1) |
| `--fs-4xl` | `clamp(32px, 1.667vw + 26.667px, 48px)` | 48px (display) |

Families: `--font-display` / `--font-ui` IBM Plex Sans ·
`--font-mono` IBM Plex Mono (SIL OFL 1.1 — see `FONTS.md`). Mono labels: `≥11px`, tracking `0.06em`, uppercase.

## Spacing · Radii · Motion

- Spacing: `--space-1` (4px) → `--space-20` (80px), 4px base.
- Radii: `--radius-sm` 4 · `--radius-md` 8 · `--radius-lg` 12 · `--radius-pill` 999.
- Motion: `--ease` cubic-bezier(0.2,0,0,1); `--dur-fast` 120ms · `--dur-base` 200ms.
- **Reduced motion:** transforms/parallax disabled globally; focus ring + opacity kept.
