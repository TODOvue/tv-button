# Changelog

All notable changes to `@todovue/tv-button` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---
## [1.1.2] - 2025-10-17
### 🐛 Fixed
- Fixed CSS export to avoid the need for manual import wherever the component is used.

---
## [1.1.1] - 2025-10-17
### 🛠️ Changed
- The library build now uses `src/entry.ts` (exports both the component and the plugin) instead of directly exporting the `.vue` file.
- CSS injection via JS has been removed for the library build (it is only kept for the demo), generating a `tv-button.css` file optimized for SSR/Nuxt.
- Changed node-version to workflows release.yml to 20.

### ✨ Added
- Plugin installation support: `app.use(TvButton)` or `app.use(TvButtonPlugin)`.
- Explicit export of the style file: `import '@todovue/tv-button/style.css'`.
- Documentation for usage in SSR and Nuxt 3 applications.

### 📦 Dependencies
- `package.json` exposes `style`, `sideEffects`, and the export of `./style.css` for safe tree-shaking.
- Updated Vite to `^7.0.0` to ensure compatibility with Node.js 20.19+.
- Updated @vitejs/plugin-vue to `^6.0.0`.

## [1.1.0] - 2025-05-08
### ✨ Added
- Add icon-only button support with styling and documentation updates
- Add loading state support with spinner and update documentation

### 🐛 Fixed
- Fixed button layout and icon positioning
- Fixed tv-btn-text styles for improved accessibility and hover effects

## [1.0.0] - 2025-05-05

### ✨ Added
- Introduced `TvButton` as a reusable and fully customizable button component.
- Support for multiple button variants: `default`, `outlined`, `text`, `icon-only`.
- Size options: `small`, `default`, `large`.
- Status-based styles: `success`, `info`, `warning`, `error`.
- `disabled` state with the appropriate accessibility handling.
- Support for custom styles via `customStyle` prop.
- Icon integration using the `icon` and `iconPosition` props.
- ARIA accessibility via `ariaLabel` prop.
- Dual-event emission: `click` and `click-button`.

### 📦 Included Icons
- 40+ built-in icons (`account`, `add-user`, `check`, `info`, `logout`, `settings`, etc.)
- All icons are SVG-based and support `currentColor` for theme compatibility.

### 🛠️ Tooling & Setup
- Bundled and built using Vite.
- Ready-to-use as a standalone or global Vue component.
- Scoped styles using SCSS.


---
[1.1.2]: https://github.com/TODOvue/tv-button/pull/16/files
[1.1.1]: https://github.com/TODOvue/tv-button/pull/15/files
[1.1.0]: https://github.com/TODOvue/tv-button/pull/13/files
[1.0.0]: https://github.com/TODOvue/tv-button/pull/12/files
