import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-button',
    configKey: 'tvButton'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-button/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
