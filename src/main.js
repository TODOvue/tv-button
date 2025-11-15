import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvButton from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvButton)
app.component('TvDemo', TvDemo)
app.mount('#tv-button')
