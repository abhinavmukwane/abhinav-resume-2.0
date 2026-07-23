# Editing Content

All text is hard-coded in the section components under `src/components/`. There's
no CMS or data file — edit the JSX directly. Keep the `wt-*` class names intact
(the theme's JS animates by class).

| To change...                        | Edit |
|-------------------------------------|------|
| Name, role, current employer, avatar | `Hero.jsx` |
| Intro blurb, tech stack, experience, education | `Resume.jsx` |
| Skill icons and percentages         | `Skills.jsx` (`data-purecounter-end`) |
| Project cards                       | `Projects.jsx` |
| Nav menu links, LinkedIn button     | `Header.jsx` |
| Mobile menu, location, social links | `Offcanvas.jsx` |
| Footer social, copyright            | `Footer.jsx` |
| Page title, meta description, favicon | `index.html` |
| Blog section (currently hidden)     | `Blog.jsx` — re-enable via `App.jsx` |

## Common edits

**Skill percentage** — in `Skills.jsx`, change the counter's end value:
```jsx
<span className="purecounter" data-purecounter-duration="3" data-purecounter-end="95"></span>%
```

**Re-enable the Blog section** — in `App.jsx`, uncomment both the import and the
`<Blog />` render:
```jsx
import Blog from './components/Blog';
// ...
<Projects />
<Blog />
```

**Images** — drop files in `public/assets/img/...` and reference them by absolute
path, e.g. `src="/assets/img/hero/hero-2-thumb.jpg"`. When adding an image, give
it meaningful `alt` text (see [IMPROVEMENTS.md](IMPROVEMENTS.md) item 5).

**A new project card** — copy an existing `.wt-project-2-item` block in
`Projects.jsx` and keep the `wt_fade_anim` class so it animates on scroll.
