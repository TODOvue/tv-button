<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Button (TvButton)
A flexible, framework‑agnostic Vue 3 button component with variants, sizes, icons, loading state, and customization utilities. Ship it in Single Page Apps or Server-Side Rendered (SSR) environments (e.g. Nuxt 3) with zero DOM assumptions.

[![npm](https://img.shields.io/npm/v/@todovue/tv-button.svg)](https://www.npmjs.com/package/@todovue/tv-button)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-button.svg)](https://www.npmjs.com/package/@todovue/tv-button)
![License](https://img.shields.io/github/license/TODOvue/tv-button)

> Demo: https://tv-button.netlify.app/

---
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Icons](#icons)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Icon-only & Variant Notes](#icon-only--variant-notes)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Roadmap](#roadmap)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---
## Features
- Multiple visual states: success, info, warning, error, text, outlined
- Sizes: small, default, large, full-width option
- Icon support (pre-bundled SVG set via `import.meta.glob`)
- Icon-only and pure icon modes (`type="icon"` + `iconOnly`)
- Loading state with spinner
- Custom inline style override via `customStyle`
- Emits both a custom event and the native click
- Works in SPA and SSR (Nuxt 3) contexts
- Tree-shake friendly (Vue marked external in library build)

---
## Installation
Using npm:
```bash
npm install @todovue/tv-button
```
Using yarn:
```bash
yarn add @todovue/tv-button
```
Using pnpm:
```bash
pnpm add @todovue/tv-button
```

Import the CSS (required to get styles):
```js
import '@todovue/tv-button/style.css'
```

---
## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import TvButton from '@todovue/tv-button'
import '@todovue/tv-button/style.css'

createApp(App)
  .use(TvButton) // enables <TvButton /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { TvButton } from '@todovue/tv-button'
import '@todovue/tv-button/style.css'

function onSubmit() {
  console.log('Clicked')
}
</script>

<template>
  <TvButton success icon="check" @click-button="onSubmit">Submit</TvButton>
</template>
```

---
## Nuxt 3 / SSR Usage
Create a plugin file: `plugins/tv-button.client.ts` (client-only is fine, or without suffix for SSR as it is safe):
```ts
import { defineNuxtPlugin } from '#app'
import TvButton from '@todovue/tv-button'
import '@todovue/tv-button/style.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvButton)
})
```
Use anywhere:
```vue
<TvButton outlined icon="info">Details</TvButton>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvButton } from '@todovue/tv-button'
import '@todovue/tv-button/style.css'
</script>
```

---
## Component Registration Options
| Approach | When to use |
|----------|-------------|
| Global via `app.use(TvButton)` | Many usages across app / design system install |
| Local named import `{ TvButton }` | Isolated / code-split contexts |
| Direct default import `import TvButton from '@todovue/tv-button'` | Single usage or manual registration |

---
## Props
All boolean style props have two interchangeable forms: a long form (`isSomething`) and a short alias.

| Prop | Aliases | Type | Default | Description |
|------|---------|------|---------|-------------|
| buttonText | — | string | '' | Optional text (alternative to slot). |
| customStyle | — | object | {} | Inline style overrides (`{ backgroundColor, color }`). |
| icon | — | string | null | Name of bundled icon. |
| iconColor | — | string | 'white' | Declared but currently not applied (see Roadmap). |
| iconPosition | — | 'left' \| 'right' | 'right' | Icon position relative to text. |
| type | — | 'button' \| 'icon' | 'button' | Variant selector AND passed to native `type` attribute (see note below). |
| ariaLabel | — | string | '' | Accessibility label (required if no text / icon-only). |
| iconOnly | — | boolean | false | Renders only the icon (no padding/background). |
| isOutlined | outlined | boolean | false | Outlined style. |
| isSmall | small | boolean | false | Small size. |
| isLarge | large | boolean | false | Large size. |
| isSuccess | success | boolean | false | Success variant. |
| isInfo | info | boolean | false | Info variant. |
| isWarning | warning | boolean | false | Warning variant. |
| isError | error | boolean | false | Error variant. |
| isDisabled | disabled | boolean | false | Disables interaction. |
| isText | text | boolean | false | Text (minimal) style. |
| isFull | full | boolean | false | Full width. |
| isRounded | rounded | boolean | false | Rounded corners. |
| isLoading | loading | boolean | false | Shows spinner & disables. |
| isCircle | circle | boolean | false | Currently unused (placeholder). |

> Note: Because `type` is bound to the native `<button type="...">`, using `type="icon"` produces a non-standard button attribute. This does not break rendering but is semantically incorrect in forms. A future release will introduce `variant` and keep `htmlType` separate (see Roadmap).

---
## Events
| Event name (kebab) | Emits (camel) | Description |
|--------------------|---------------|-------------|
| `click-button` | `clickButton` | Custom semantic click event. |
| `click` | `click` | Native passthrough (also emitted manually). |

Usage:
```vue
<TvButton @click-button="onAction" />
<TvButton @click="onNative" />
```

---
## Icons
Set with the `icon` prop. Available names:
`account`, `add-user`, `alert`, `arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `block`, `calendar`, `cancel`, `check`, `clone`, `dark`, `download`, `edit`, `external-link`, `favorite`, `filter`, `help`, `info`, `light`, `loading`, `lock`, `login`, `logout`, `menu`, `minus`, `notification`, `plus`, `remove`, `search`, `settings`, `share`, `star`, `todovue`, `unlock`, `update`, `view`.

Example:
```vue
<TvButton icon="check" success>Saved</TvButton>
<TvButton icon="info" iconPosition="left" outlined>Info</TvButton>
```

---
## Customization (Styles / Theming)
Inline overrides via `customStyle`:
```vue
<TvButton :customStyle="{ backgroundColor: '#0f2e5b', color: '#fff' }">Branded</TvButton>
```
Outlined variant adapts automatically:
```vue
<TvButton outlined :customStyle="{ backgroundColor: '#ff4081', color: '#fff' }">Pink Outline</TvButton>
```
> A subtle hover darkening is auto-generated when `customStyle.backgroundColor` exists.

---
## Icon-only & Variant Notes
Pure icon button:
```vue
<TvButton type="icon" icon="edit" />
```
Inline icon-only action (no background / padding):
```vue
<TvButton type="icon" icon="edit" :iconOnly="true" aria-label="Edit item" />
```
Loading state:
```vue
<TvButton loading icon="download">Processing...</TvButton>
```

---
## Accessibility
- Always provide visible text OR `aria-label`.
- Mandatory: add `aria-label` when using `iconOnly` or when slot content is empty.
- Disabled state uses both `disabled` attribute and styling classes.

---
## SSR Notes
- No direct DOM (`window` / `document`) access in source → safe for SSR.
- Styles emitted as a separate CSS file (`style.css`) in library build → ideal for Nuxt 3.
- SVG icons are bundled via Vite's `import.meta.glob` (works in Vite + Nuxt).
- Ensure you import `@todovue/tv-button/style.css` in an SSR-compatible entry (plugin or layout).

---
## Roadmap
| Item | Status |
|------|--------|
| Separate `type` into `variant` + `htmlType` | Planned |
| Implement `iconColor` application | Planned |
| Implement `isCircle` styling | Planned |
| Add theming API (CSS vars) | Considering |
| Add ARIA improvements for loading state | Considering |

---
## Development
```bash
git clone https://github.com/TODOvue/tv-button.git
cd tv-button
yarn install
yarn dev     # run demo playground
yarn build   # build library
```
Local demo served from Vite using `index.html` + `src/demo` examples.

---
## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---
## License
MIT © TODOvue

---
### Attributions
Crafted for the TODOvue component ecosystem
