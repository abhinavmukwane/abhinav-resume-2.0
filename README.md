# Abhinav Mukwane — Portfolio (v2.0)

Personal one-page resume/portfolio site. A purchased HTML theme (jQuery + GSAP +
Bootstrap + Swiper, under `public/assets/`) wrapped in a thin **React 19 + Vite**
shell. React renders the markup; the vendor scripts handle animation, the smooth
scroller, counters, sliders, and the cursor.

## Quick start

```bash
npm install
npm run dev      # local dev server (Vite)
npm run build    # production build -> dist/
npm run preview  # serve the built dist/ locally
npm run lint     # ESLint
```

Node 18+ recommended. `.npmrc` sets `legacy-peer-deps=true` so installs don't
fail on the theme's peer-dependency conflicts (also fixes the Netlify build).

## Structure

```
index.html              App shell: <head> asset links, preloader, back-to-top, #root
src/
  main.jsx              React entry (StrictMode)
  App.jsx               Composes sections; loads the theme's vendor JS at runtime
  components/           One presentational component per section
public/assets/          Vendor theme: css/, js/, scss/, img/ (fonts, etc.)
docs/                   Project docs (see below)
```

## Docs

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — how the React shell and vendor theme fit together.
- [docs/IMPROVEMENTS.md](docs/IMPROVEMENTS.md) — code/theme review: what's fixed and what's still worth doing.
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — build and deploy (Netlify).
- [docs/CONTENT.md](docs/CONTENT.md) — where to edit resume text, skills, and projects.
