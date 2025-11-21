import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-button',
    configKey: 'tvButton'
  },
  setup(_options, nuxt) {
    nuxt.options.css.push('@todovue/tv-button/style.css')
  }
})
