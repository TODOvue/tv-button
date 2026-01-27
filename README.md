<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Button (TvButton)
A flexible, framework‑agnostic Vue 3 button component with variants, sizes, icons, loading state, and customization utilities. Ship it in Single Page Apps or Server-Side Rendered (SSR) environments (e.g. Nuxt 3) with zero DOM assumptions.

[![npm](https://img.shields.io/npm/v/@todovue/tv-button.svg)](https://www.npmjs.com/package/@todovue/tv-button)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-button.svg)](https://www.npmjs.com/package/@todovue/tv-button)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-button.svg)](https://www.npmjs.com/package/@todovue/tv-button)
![License](https://img.shields.io/github/license/TODOvue/tv-button)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-button)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-button)
![Node Version](https://img.shields.io/node/v/@todovue/tv-button)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-button)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-button?style=social)

> Demo: https://ui.todovue.blog/button/

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Style usage](#style-usage)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Icons](#icons)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Icon-only & Variant Notes](#icon-only--variant-notes)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Variants**: primary, secondary, success, info, warning, error
- **Sizes**: sm, md, lg, full-width option
- Icon support (pre-bundled SVG set via `import.meta.glob`)
- Icon-only and pure icon modes (`type="icon"` + `iconOnly`)
- Loading state with spinner
- Custom inline style override via `customStyle`
- Emits both a custom event and the native click
- Works in SPA and SSR (Nuxt 3) contexts
- Tree-shake friendly (Vue marked external in library build)

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

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import '@todovue/tv-button/style.css'
import TvButton from '@todovue/tv-button'

createApp(App)
  .use(TvButton) // enables <TvButton /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import '@todovue/tv-button/style.css'
import { TvButton } from '@todovue/tv-button'

function onSubmit() {
  console.log('Clicked')
}
</script>

<template>
  <TvButton variant="success" icon="check" @click-button="onSubmit">Submit</TvButton>
</template>
```

## Style usage

### Vue 3 SPA with Vite
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-button/style.css'
import { TvButton } from '@todovue/tv-button'

const app = createApp(App)
app.component('TvButton', TvButton)
app.mount('#app')
```

### Nuxt 3/4
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-button/nuxt'
  ]
})
```

## Nuxt 4 / SSR Usage
Create a plugin file: `plugins/tv-button.client.ts` (client-only is fine, or without suffix for SSR as it is safe):
```ts
import { defineNuxtPlugin } from '#app'
import TvButton from '@todovue/tv-button'

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
</script>
```

## Component Registration Options
| Approach                                                          | When to use                                    |
|-------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvButton)`                                    | Many usages across app / design system install |
| Local named import `{ TvButton }`                                 | Isolated / code-split contexts                 |
| Direct default import `import TvButton from '@todovue/tv-button'` | Single usage or manual registration            |

## Props
All boolean style props have two interchangeable forms: a long form (`isSomething`) and a short alias.

| Prop         | Type                                      | Default   | Description                                            |
|--------------|-------------------------------------------|-----------|--------------------------------------------------------|
| buttonText   | string                                    | ''        | Optional text (alternative to slot).                   |
| variant      | 'primary' \| 'secondary' \| 'success' ... | 'primary' | Visual style variant.                                  |
| size         | 'sm' \| 'md' \| 'lg'                      | 'md'      | Button size.                                           |
| customStyle  | object                                    | {}        | Inline style overrides (`{ backgroundColor, color }`). |
| icon         | string                                    | null      | Name of bundled icon.                                  |
| iconColor    | string                                    | 'white'   | Icon color override.                                   |
| iconPosition | 'left' \| 'right'                         | 'right'   | Icon position relative to text.                        |
| type         | 'button' \| 'submit' \| 'reset' \| 'icon' | 'button'  | Native button type. Use 'icon' for icon-only styling.  |
| ariaLabel    | string                                    | ''        | Accessibility label (required if no text / icon-only). |
| iconOnly     | boolean                                   | false     | Renders only the icon (no padding/background).         |
| outlined     | boolean                                   | false     | Outlined style.                                        |
| rounded      | boolean                                   | false     | Rounded corners.                                       |
| disabled     | boolean                                   | false     | Disables interaction.                                  |
| loading      | boolean                                   | false     | Shows spinner & disables.                              |
| full         | boolean                                   | false     | Full width.                                            |
| text         | boolean                                   | false     | Text (minimal) style.                                  |
| href         | string                                    | null      | URL for native anchor tag.                             |
| to           | string \| object                          | null      | Route for RouterLink / NuxtLink.                       |
| target       | string                                    | null      | Anchor target (e.g. '_blank').                         |
| rel          | string                                    | null      | Anchor rel attribute.                                  |

> Note: Because `type` is bound to the native `<button type="...">`, using `type="icon"` produces a non-standard button attribute. This does not break rendering but is semantically incorrect in forms. A future release will introduce `variant` and keep `htmlType` separate (see Roadmap).

## Events
| Event name (kebab) | Emits (camel) | Description                                 |
|--------------------|---------------|---------------------------------------------|
| `click-button`     | `clickButton` | Custom semantic click event.                |
| `click`            | `click`       | Native passthrough (also emitted manually). |

Usage:
```vue
<TvButton @click-button="onAction" />
<TvButton @click="onNative" />
```

## Icons
Set with the `icon` prop. Available names:
`account`, `add-user`, `alert`, `arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `block`, `calendar`, `cancel`, `check`, `clone`, `dark`, `download`, `edit`, `external-link`, `favorite`, `filter`, `help`, `info`, `light`, `loading`, `lock`, `login`, `logout`, `menu`, `minus`, `notification`, `plus`, `remove`, `search`, `settings`, `share`, `star`, `todovue`, `unlock`, `update`, `view` `double-arrow-left`, `double-arrow-right`, `home`, `dots-vertical`, `eye-off`, `trash`, `upload`, `dashboard`, `folder`, `link`, `mail` and `save`.

Example:
```vue
<TvButton icon="check" variant="success">Saved</TvButton>
<TvButton icon="info" iconPosition="left" outlined>Info</TvButton>
```

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

Link usage:
```vue
<!-- Native anchor -->
<TvButton href="https://todovvue.blog" target="_blank">External Link</TvButton>

<!-- Router link -->
<TvButton to="/dashboard">Go to Dashboard</TvButton>
```

## Accessibility
- Always provide visible text OR `aria-label`.
- Mandatory: add `aria-label` when using `iconOnly` or when slot content is empty.
- Disabled state uses both `disabled` attribute and styling classes.

## SSR Notes
- No direct DOM (`window` / `document`) access in source → safe for SSR.
- Styles are now served from a separate CSS file generated by Vite (`dist/tv-button.css`). You need to import it explicitly in your app (SPA or Nuxt) using `@todovue/tv-button/style.css`.
- SVG icons are bundled via Vite's `import.meta.glob` (works in Vite + Nuxt).

## Development
```bash
git clone https://github.com/TODOvue/tv-button.git
cd tv-button
yarn install
yarn dev     # run demo playground
yarn build   # build library
```
Local demo served from Vite using `index.html` + `src/demo` examples.

## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License
MIT © TODOvue

### Attributions
Crafted for the TODOvue component ecosystem
