# Deployment

## Build

```bash
npm install
npm run build     # outputs static site to dist/
npm run preview   # verify the production build locally
```

`dist/` is a fully static bundle (HTML + the passed-through `public/assets/`).
It can be hosted on any static host — Netlify, Vercel, GitHub Pages, S3, etc.

## Netlify (current target)

Settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18+

### Peer-dependency install failures

The theme's transitive deps cause an `ERESOLVE` error on a clean `npm install`.
This repo already handles it with `.npmrc`:

```
legacy-peer-deps=true
```

Netlify picks that up automatically. If you switch hosts, replicate it — either
keep `.npmrc`, or set install to `npm install --legacy-peer-deps`.

## SPA note

This is a single page with in-page anchor navigation (`#resume-one-page`, etc.),
so no history/rewrite rules are required. If routes are ever added, add a
catch-all rewrite to `/index.html` (`public/_redirects` on Netlify:
`/*  /index.html  200`).

## Pre-deploy checklist

- [ ] `npm run build` succeeds locally.
- [ ] `npm run preview` looks correct (animations, counters, sliders run).
- [ ] `npm run lint` is clean.
- [ ] Links (LinkedIn, GitHub, project repos) resolve.
- [ ] Favicon and logo images load.
