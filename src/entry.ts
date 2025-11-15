import TvButton from './components/TvButton.vue'
import './style.scss'

(TvButton as any).install = (app: any) => {
  app.component('TvButton', TvButton)
};

export const TvButtonPlugin = {
  install(app: any) {
    app.component('TvButton', TvButton)
  }
}

export { TvButton }
export default TvButton
