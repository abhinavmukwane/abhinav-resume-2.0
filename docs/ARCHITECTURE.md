# Architecture

## The two halves

This site is a **purchased HTML theme** driving the visuals, with a **thin React
layer** producing the DOM it animates.

1. **React (`src/`)** — renders static, presentational JSX. No state, no data
   fetching, no routing. Each section is one component.
2. **Vendor theme (`public/assets/`)** — jQuery, GSAP (+ ScrollSmoother /
   ScrollTrigger / SplitText), Swiper, Slick, magnific-popup, purecounter, wow,
   vanilla-tilt, isotope, and the theme's own `main.js`. These are plain
   `<script>` files that query the DOM by class name after load.

The bridge between them is the class names. React must emit the exact markup and
`wt-*` / `wt_fade_anim` / `wt-char-animation` / `purecounter` classes the theme's
JS looks for, or the animation silently does nothing.

## Load sequence

1. `index.html` links the theme CSS in `<head>`, then mounts `#root` and loads
   `src/main.jsx` as a module.
2. `main.jsx` renders `<App/>` under React StrictMode.
3. `App.jsx`, in a `useEffect`, appends the ~24 vendor scripts to `<body>` **in
   order** (`async = false` so order holds), after a 100 ms `setTimeout` so React
   has painted the DOM first. A `window.themeScriptsLoaded` guard stops the
   double-run that StrictMode's double-invoke would otherwise cause.

```
index.html (CSS + #root)
      -> main.jsx (React render)
            -> App.jsx useEffect
                  -> setTimeout 100ms
                        -> load jquery -> ... -> main.js  (order matters)
```

### Why it's fragile (and why it works)

- The 100 ms delay and the `themeScriptsLoaded` global are timing hacks, not
  guarantees. They hold because the content is static — the DOM the theme scans
  never changes after first paint.
- If any section were ever made dynamic (rendered after the scripts run), its
  animations would not initialize, because the theme's JS only scans the DOM once
  at load. That is the main architectural constraint to keep in mind.

## Components (`src/components/`)

| Component      | Section        | Notes |
|----------------|----------------|-------|
| `Offcanvas`    | mobile menu    | Mobile menu container + social + location. |
| `Header`       | top nav        | Logo, one-page anchor menu, LinkedIn button, mobile toggle. |
| `Hero`         | hero           | Name, role, current employer, avatar. |
| `Resume`       | experience/edu | Bootstrap tab markup for Experience and Education. |
| `Skills`       | skills grid    | `purecounter` animated percentages. |
| `Projects`     | projects       | Five project cards. |
| `Blog`         | blog           | **Hidden** — import and render both commented out in `App.jsx`. |
| `Footer`       | footer         | Brand slider (Swiper), social links, copyright. |

## Conventions

- Presentational only. Content is hard-coded in JSX — see
  [CONTENT.md](CONTENT.md) for where each piece lives.
- Keep the theme class names intact when editing; they are the animation contract.
- Assets are referenced by absolute path (`/assets/...`) and served from
  `public/`, so Vite passes them through untouched.
