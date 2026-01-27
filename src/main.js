import { createApp } from 'vue'
import TvButton from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvButton)
app.mount('#tv-button')
