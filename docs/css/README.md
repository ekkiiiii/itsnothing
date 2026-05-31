# Site CSS structure

Styles are split so page-specific rules do not bleed globally.

## Layers (loaded via `static/style.css`)

| Folder | Purpose |
|--------|---------|
| `base/` | Typography and reading width for all posts/pages |
| `layout/` | Header, menu, container width, default post media |
| `components/` | Reusable blocks (article series, galleries, tech-insight) |

## Page bundles (`pages/`)

Loaded automatically when `static/css/pages/{slug}.css` exists and the page slug matches `ContentBaseName` (see `layouts/partials/head.html`).

| File | Scope class | Content |
|------|-------------|---------|
| `portfolio.css` | `.post--portfolio` | Portfolio headings, details, `#center` images |
| `about-me.css` | `.post--about-me` | Portrait image sizing |
| `matchpicks-platform-overview.css` | `.post--matchpicks-platform-overview` | Numbered list styling |

Add a new page stylesheet:

1. Create `static/css/pages/your-slug.css`
2. Prefix every selector with `.post--your-slug`
3. Rebuild Hugo — no front matter needed

## Rules

- Do **not** put page-specific CSS in `style.css` imports.
- Do **not** use bare `h2`, `.post-content`, etc. in `base/` or `components/`.
- Prose alignment lives in `base/reading-layout.css` only.
- Galleries and covers may use `text-align: center`; body text should not.

## Legacy

Old flat files (`layout-overrides.css`, `stuff-i-built.css`, `aboutme.css`) were removed in the CSS cleanup. Use this layout instead.
