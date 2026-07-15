# Fonts — licenses & attribution

Kern bundles fonts **offline** as woff2 under `assets/fonts/`.
There is **no** Google Fonts `<link>` or CDN dependency at runtime.

## Active stack (v0.3+)

| Role | Family | Weights | License |
|------|--------|---------|---------|
| Display + UI | **IBM Plex Sans** | 400, 500, 600, 700 | SIL Open Font License 1.1 |
| Labels / meta | **IBM Plex Mono** | 400, 500 | SIL Open Font License 1.1 |

**Why this stack:** single corporate steward (IBM), one shared OFL text,
explicit **Reserved Font Name “Plex”**, clear redistributability for
offline bundling. Display vs UI hierarchy is carried by **weight**, not
a second family.

## License file

Full license text (must ship with the font software):

- [`assets/fonts/OFL-IBM-Plex.txt`](assets/fonts/OFL-IBM-Plex.txt)

Upstream:

- https://github.com/IBM/plex
- Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"
- License: SIL Open Font License, Version 1.1
  (https://scripts.sil.org/OFL / https://openfontlicense.org)

### OFL summary (not a substitute for the full text)

You may use, study, modify, embed, and redistribute the fonts
(including bundling with software) **provided** each copy includes the
copyright notice and this license. You may **not** sell the fonts by
themselves. Modified versions must not use the Reserved Font Name
“Plex” without permission. Documents created *with* the fonts are not
bound by the OFL.

## Subsets

Bundled files cover **latin** and **latin-ext** (Turkish ğüşöçıİ and
other Latin Extended glyphs). Re-bundle:

```bash
python scripts/download_fonts.py
```

Requires network once. Writes `assets/fonts/*.woff2` and regenerates
`assets/fonts.css`.

## Previous stack (removed in v0.3)

Space Grotesk, Inter, and JetBrains Mono (all also SIL OFL 1.1) were
replaced for **license documentation clarity and single-steward
simplicity**, not because their licenses were unclear.
