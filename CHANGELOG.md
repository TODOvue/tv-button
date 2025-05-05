# Changelog

All notable changes to `@todovue/tv-button` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---

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
[1.0.0]: https://github.com/TODOvue/tv-button/pull/12/files
