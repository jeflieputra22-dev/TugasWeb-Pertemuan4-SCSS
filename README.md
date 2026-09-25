# Konversi CSS → SCSS — Tugas Rutin 4

Konversi dari `style.css` (Tugas Pertemuan 2: Dashboard/Portofolio) ke SCSS
dengan struktur **7-1 pattern**.

## Struktur folder

```
scss/
├─ abstracts/
│  ├─ _variables.scss   → warna & spacing sebagai Sass map
│  ├─ _functions.scss   → color(), spacer(), radius()
│  ├─ _mixins.scss      → 5 mixin reusable
│  └─ _index.scss       → @forward semua di atas
├─ base/
│  ├─ _reset.scss       → box-sizing, html, body
│  └─ _root.scss        → :root custom properties (di-generate via @each)
├─ layout/
│  ├─ _header.scss
│  ├─ _navigation.scss
│  ├─ _main-grid.scss   → CSS Grid utama + #tentang/#keahlian/#kontak
│  └─ _footer.scss
├─ components/
│  ├─ _figure.scss      → foto profil
│  ├─ _skills.scss      → tag keahlian (pakai @for)
│  ├─ _forms.scss       → form kontak (pakai @each)
│  └─ _buttons.scss     → tombol (pakai @each)
├─ themes/
│  └─ _dark.scss        → bonus dark mode
├─ main.scss            → entry point, gabungkan semua via @use
├─ package.json
└─ vite.config.js
```

## Checklist requirement

- [x] Konversi CSS existing ke SCSS
- [x] Nesting maksimal 3 level (mis. `nav a:hover`, `input[type] &:focus`)
- [x] Struktur 7-1 pattern (partials)
- [x] `@each` (generator `:root`, input text-like, varian tombol) **dan**
      `@for` (stagger transition-delay tag keahlian)
- [x] Variables untuk colors & spacing (`$colors`, `$spacers`, `$radii`)
- [x] 5 mixin reusable: `transition`, `flex`, `card`, `focus-ring`, `respond-to`
- [x] `@use` di semua partial (tidak ada `@import`)
- [x] Compile via Vite / Dart Sass

## Cara compile

### Opsi A — Dart Sass langsung
```bash
npm install -D sass
npx sass main.scss dist/style.css
# atau watch mode:
npx sass --watch main.scss:dist/style.css
```

### Opsi B — Lewat Vite
```bash
npm install
npm run dev      # dev server, SCSS auto-compile
npm run build    # build production
```

Lalu import di HTML/JS:
```html
<link rel="stylesheet" href="dist/style.css">
```
atau, kalau pakai Vite sebagai bundler:
```js
import "./main.scss";
```
