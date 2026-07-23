# Code & Theme Review

Review of the React source, `index.html`, and how the vendor theme is wired.
Ordered by impact. Items marked **Fixed** were applied in this pass.

## Fixed in this pass

1. **`lang="zxx"` → `lang="en"`** *(`index.html`)*
   `zxx` means "no linguistic content" — bad for SEO and screen readers. Now `en`.

2. **Removed the production error-catcher script** *(`index.html`)*
   A `window.onerror` / `unhandledrejection` handler injected a fixed red/orange
   overlay showing raw stack traces to *every visitor*. That's a debugging
   artifact — fine locally, wrong in production. Deleted. Use the browser console
   (or a real error service like Sentry) during development instead.

3. **Unused `Blog` import** *(`src/App.jsx`)*
   `Blog` was imported but its `<Blog />` is commented out, so it was a dead
   import (an ESLint `no-unused-vars` error). Import is now commented alongside
   the render, so re-enabling the section is a single uncomment.

4. **Dropped the unused `puppeteer` dependency** *(`package.json`)*
   Removed from `devDependencies` — it was referenced nowhere and pulled a full
   headless Chromium on every install. Run `npm install` once to sync
   `package-lock.json` (the lock still lists it until then).

5. **Meaningful `alt` text + accessible names** *(`Header`, `Offcanvas`, `Hero`)*
   Logo and hero images now have descriptive `alt`; the icon-only menu and close
   buttons got `aria-label`s. Skill icons and footer brand logos were **left**
   `alt=""` on purpose — they sit next to visible text labels, so decorative alt
   is the correct choice (avoids redundant screen-reader announcements).

6. **Fixed placeholder / dead anchors** *(`Header`, `Offcanvas`, `Footer`)*
   Header + offcanvas logos now carry `aria-label="Back to top"`; the offcanvas
   logo's `href="index.html"` (a dead path in a Vite SPA) is now `#`; the footer
   `Abhi9M` copyright link points at the real GitHub profile.

7. **Removed the dead `SearchPopup`** *(deleted `src/components/SearchPopup.jsx`)*
   The overlay posted to `#` and had no opener anywhere in the markup — pure theme
   leftover. Deleted the component and its render/import.

8. **Added Open Graph / Twitter meta** *(`index.html`)*
   Shared links now show a title, description, and preview image card.

## Recommended next (not yet done)

### Medium

9. **Consider self-hosting only the assets you use**
   `public/assets/js` ships ~30 vendor scripts and `public/assets/css` a dozen
   stylesheets — many for theme features this one-pager never uses (countdown,
   range-slider, isotope, nice-select, ajax-form, blog styles, etc.). Trimming the
   unused ones shrinks the payload noticeably. Do this carefully: `main.js`
   assumes several of them are present, so remove one at a time and retest.

9. **The runtime script-loader is timing-based** *(`src/App.jsx`)*
   The 100 ms `setTimeout` + `window.themeScriptsLoaded` guard works only because
   every section is static and present at first paint. It's the site's main
   constraint: any section rendered *after* load won't get animated, since the
   theme JS scans the DOM only once. Fine as-is — just don't make sections
   dynamic without re-initializing the relevant plugin.

10. **Extract repeated inline styles**
    `Resume`, `Projects`, and `Hero` repeat inline `style={{...}}` (list styling,
    `color: '#555'`, justify). Moving these to a small CSS class or the theme SCSS
    would cut duplication and keep styling in one place. Low priority — cosmetic.

### Low / nice-to-have

11. **`React` imports are unused with the modern JSX transform.**
    Each component does `import React from 'react'` but never references `React`
    (Vite's automatic runtime doesn't need it). Harmless, removable — leave if you
    prefer the explicit import.

## What's fine as-is

- React 19 + Vite setup is clean and current.
- StrictMode double-invoke is correctly guarded in the loader.
- External links consistently use `target="_blank"` + `rel="noopener noreferrer"`.
- `.npmrc` `legacy-peer-deps=true` is the right fix for the theme's peer conflicts.
